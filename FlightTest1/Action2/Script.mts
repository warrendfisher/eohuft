﻿Dim currentDate
currentDate = Date()
Dim flightDate
flightDate = DateAdd("d",10,currentDate)
Dim datePicker
datePicker = Day(flightDate)&"-"&MonthName(Month(flightDate))&"-"&Year(flightDate)

Services.StartTransaction "2_FlightFinder"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Sydney" @@ hightlight id_;_2064869904_;_script infofile_;_ZIP::ssf5.xml_;_
'WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "10-May-2019"
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate datePicker
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2115958192_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2111722056_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2115960112_;_script infofile_;_ZIP::ssf16.xml_;_
Services.EndTransaction "2_FlightFinder"
