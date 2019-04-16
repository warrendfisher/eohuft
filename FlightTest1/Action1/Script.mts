Services.StartTransaction "1_Login"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5cb483d189f33eba4364"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
Services.EndTransaction "1_Login"
