# Copyright 2020 Adobe
# All Rights Reserved.

# NOTICE: Adobe permits you to use, modify, and distribute this file in
# accordance with the terms of the Adobe license agreement accompanying
# it. If you have received this file from a source other than Adobe,
# then your use, modification, or distribution of it requires the prior
# written permission of Adobe.

defmodule BotArmy.Metrics.Export do
  @moduledoc """
  Formats metrics data for export (via the `/metrics` http endpoint)
  """

  alias BotArmy.{
    EtsMetrics
  }

  @derive Jason.Encoder
  defstruct bot_count: nil, total_error_count: nil, actions: %{}

  def generate_report() do
    [{"metrics", %EtsMetrics{actions: actions, n: n}}] = :ets.lookup(:metrics, "metrics")

    total_error_count =
      actions
      |> Enum.reduce(0, fn {_, %{error_count: errors}}, acc -> acc + errors end)

    %__MODULE__{
      bot_count: n,
      total_error_count: total_error_count,
      actions: actions
    }
  end
end
