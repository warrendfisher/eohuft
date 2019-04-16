Services.StartTransaction "4_FlightConfirmation"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "John B. Good"
'WpfWindow("Micro Focus MyFlight Sample").WpfProgressBar("progBar").WaitProperty "value", 100 @@ script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2115967360_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_395880_;_script infofile_;_ZIP::ssf6.xml_;_
Services.EndTransaction "4_FlightConfirmation"
