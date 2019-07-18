sidebarNodes={"extras":[{"id":"api-reference","title":"API Reference","group":"","headers":[{"id":"Modules","anchor":"modules"},{"id":"Mix Tasks","anchor":"mix-tasks"}]},{"id":"readme","title":"Bot Army","group":"","headers":[{"id":"Behavior what?","anchor":"behavior-what"},{"id":"Release the bots!","anchor":"release-the-bots"},{"id":"Integration testing","anchor":"integration-testing"},{"id":"Logging","anchor":"logging"},{"id":"Metrics schema","anchor":"metrics-schema"},{"id":"Communicating with the bots from outside","anchor":"communicating-with-the-bots-from-outside"},{"id":"Are there tests?","anchor":"are-there-tests"}]}],"exceptions":[],"modules":[{"id":"BotArmy.Actions","title":"BotArmy.Actions","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"action/3","anchor":"action/3"},{"id":"done/1","anchor":"done/1"},{"id":"error/2","anchor":"error/2"},{"id":"log/2","anchor":"log/2"},{"id":"succeed_rate/2","anchor":"succeed_rate/2"},{"id":"wait/2","anchor":"wait/2"},{"id":"wait/3","anchor":"wait/3"}]}]},{"id":"BotArmy.Bot","title":"BotArmy.Bot","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"run/2","anchor":"run/2"},{"id":"start_link/2","anchor":"start_link/2"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"id":"log_action_outcome/3","anchor":"c:log_action_outcome/3"}]}]},{"id":"BotArmy.Bot.Default","title":"BotArmy.Bot.Default","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"start_link/1","anchor":"start_link/1"}]}]},{"id":"BotArmy.BotManager","title":"BotArmy.BotManager","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"get_bot_count/0","anchor":"get_bot_count/0"},{"id":"init/1","anchor":"init/1"},{"id":"integration_test/1","anchor":"integration_test/1"},{"id":"one_off/1","anchor":"one_off/1"},{"id":"run/1","anchor":"run/1"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"stop/0","anchor":"stop/0"}]}]},{"id":"BotArmy.Metrics","title":"BotArmy.Metrics","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"get_state/0","anchor":"get_state/0"},{"id":"init/1","anchor":"init/1"},{"id":"run/1","anchor":"run/1"},{"id":"start_link/1","anchor":"start_link/1"}]}]},{"id":"BotArmy.Metrics.Export","title":"BotArmy.Metrics.Export","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"generate_report/0","anchor":"generate_report/0"}]}]},{"id":"BotArmy.Metrics.SummaryReport","title":"BotArmy.Metrics.SummaryReport","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"build_report/0","anchor":"build_report/0"}]}]},{"id":"BotArmy.Router","title":"BotArmy.Router","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]}]},{"id":"BotArmy.SharedData","title":"BotArmy.SharedData","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"get/1","anchor":"get/1"},{"id":"put/2","anchor":"put/2"},{"id":"update/2","anchor":"update/2"}]}]},{"id":"TermParser","title":"TermParser","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"parse/1","anchor":"parse/1"}]}]}],"tasks":[{"id":"Mix.Tasks.Bots.IntegrationTest","title":"mix bots.integration_test","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"run/1","anchor":"run/1"}]}]},{"id":"Mix.Tasks.Bots.Run","title":"mix bots.run","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"run/1","anchor":"run/1"}]}]},{"id":"Mix.Tasks.RunBotsRelease","title":"mix run_bots_release","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"run/1","anchor":"run/1"}]}]}]}