/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "es",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendario y Agenda",
			position: "top_left",
			config: {
				fetchInterval: 10000,
				calendars: [
					{
						symbol: "Festivos en España",
						url: "https://calendar.google.com/calendar/ical/es.spain%23holiday%40group.v.calendar.google.com/public/basic.ics"
					},
					{
						symbol: "Agenda Personal",
						url: "https://calendar.google.com/calendar/ical/talleraimirror2019%40gmail.com/private-2dfee3995fd9aa0cd53e5ef8e3fa2022/basic.ics"
					}
					   ]	
				}
		},
		{
			module: "compliments",
			position: "lower_third",	
							
			config: {
				compliments: {
					anytime:  [
				  		"¡Hola!"
		                  	],
					morning:  [
				  		"¡Buenos días!",
				  		"¡Disfruta tu día!",
				  		"¿Como estuvo tu sueño?"
			           	],
					afternoon: [
				   		"¡Luciendo bien hoy!"
			           	],
					evening:   [
				   		"¡Se ve bien!"
				   	]
		              	},
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Lleida",
				locationID: "3118514",
				appid: "b8412986860eec1538edd591113f8f45"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Pronóstico del Tiempo",
			config: {
				location: "Lleida",
				locationID: "3118514",
				appid: "481b121cad64e237a777fc034fd548b4"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "El País",
						url: "http://ep00.epimg.net/rss/elpais/portada.xml"
					},
					{
						title: "Segre",
						url: "http://www.segre.com/rss/es"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true,
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
