defmodule A do
  @moduledoc false

  def simple(_context), do: :ok

  def one_arg(_context, _x), do: :ok

  def with_args(_context, _num, _string, _opts \\ []), do: :ok
end

defmodule A.Nested do
  @moduledoc false

  def test(_context), do: :ok
end

defmodule B do
  @moduledoc false

  def test(_context, _a, _b \\ 22, _c \\ 33), do: :ok
end

defmodule Module.Base.A do
  @moduledoc false
  def test(_context), do: :ok
end

defmodule Module.Base.A.Nested do
  @moduledoc false
  def test(_context), do: :ok
end

defmodule Module.Base.B do
  @moduledoc false
  def test(_context), do: :ok
end

defmodule Module.Base.Custom do
  @moduledoc false
  def test(_context), do: :ok
end

defmodule BotArmy.BTParserTest do
  @moduledoc false

  use ExUnit.Case

  alias BehaviorTree.Node
  alias BotArmy.BTParser
  import BotArmy.Actions, only: [action: 2, action: 3]

  describe "BTParser" do
    test "parse/1" do
      path = "test/bt_sample.json"
      parsed = BTParser.parse!(path, "Root", context: %{x: "from context"})
      assert parsed == expected_parsed_tree()
    end

    test "specifying a different tree" do
      path = "test/bt_sample.json"
      parsed = BTParser.parse!(path, "Tree B", context: %{x: "from context"})

      assert parsed ==
               Node.sequence([
                 action(B, :test, [1, 2, 3]),
                 action(B, :test, [999]),
                 action(B, :test, [999, 999, 999])
               ])
    end

    test "using module_base" do
      expected =
        Node.select([
          action(Module.Base.A, :test, []),
          action(Module.Base.A.Nested, :test, []),
          action(Module.Base.B, :test, []),
          action(Module.Base.Custom, :test, []),
          action(BotArmy.Actions, :wait, [1])
        ])

      parsed = BTParser.parse!("test/base_name_sample.json", "Root", module_base: "Module.Base")
      assert parsed == expected
    end
  end

  defp expected_parsed_tree,
    do:
      Node.sequence([
        Node.select([
          action(A, :simple, []),
          action(A, :one_arg, [1]),
          action(A.Nested, :test),
          action(A, :simple, []),
          action(A, :with_args, [1, "hi", [name: false]]),
          action(A, :with_args, [2, "bye"]),
          action(BotArmy.Actions, :error, ["Oops"])
        ]),
        Node.repeat_until_succeed(Node.negate(action(A, :simple))),
        Node.repeat_until_fail(
          Node.sequence([
            action(A, :simple),
            action(BotArmy.Actions, :succeed_rate, [0.5])
          ])
        ),
        Node.repeat_n(5, action(A, :with_args, [2, "from context"])),
        action(BotArmy.Actions, :wait, [1]),
        action(BotArmy.Actions, :wait, [1, 10]),
        Node.select([
          Node.random([
            Node.always_fail(action(BotArmy.Actions, :log, ["This fails no matter what"])),
            Node.always_succeed(action(BotArmy.Actions, :log, ["This succeeds no matter what"]))
          ]),
          Node.random_weighted([
            {action(A, :simple, []), 1},
            {action(A, :with_args, [9, "ok"]), 1},
            {action(A.Nested, :test, []), 10}
          ])
        ]),
        Node.sequence([
          action(B, :test, [1, 2, 3]),
          action(B, :test, [1]),
          action(B, :test, [1, 999, 999])
        ]),
        Node.sequence([
          action(B, :test, [1, 2, 3]),
          action(B, :test, [111]),
          action(B, :test, [111, 222, 333])
        ]),
        action(BotArmy.Actions, :done, [])
      ])
end
