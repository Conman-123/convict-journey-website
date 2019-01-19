/*------------------------------------------
References:
	jQuery 3.3.1: https://code.jquery.com/
	Bootstrap Slider by Stefan Petre: https://github.com/seiyria/bootstrap-slider
--------------------------------------------*/



$.fn.redraw = function(){
	$(this).each(function(){
	  var redraw = this.offsetHeight;
	});
};

/**
 * A class to handle the choose your own adventure.
 */

function enablebutton() {
	$('#timeline-forward').prop('disabled', false);
	$('#timeline-forward').addClass('timeline-forward');
	$('#timeline-forward').css({'cursor':'pointer', 'background-color': '#ffcc56', 'color': 'white'})
}	

function finishbutton() {
	$('#timeline-forward').prop('disabled', false);
	$('#timeline-forward').addClass('timeline-forward');
	$('#timeline-forward').css({'cursor':'pointer', 'background-color': '#ffcc56', 'color': 'white'})

}	



class CharacterStory {

	
	
	/** Creates a characterStory with currentId of 1 */
	constructor() {
		this._currentId = 1;
		this._lvl2Choice; // The choice the user made at 5 (level 2)
		this._lvl3Choice; // The choice the user made at 9 or 10 (level 3)
		this._lvl3Outcome; // "3.1" for character in sydney
							// "3.2" for character in tasmania
		this._lvl4Choice; // The choice the user made at 17 or 21 (level 4)
		this._lvl4Outcome; // 4.1.2 for prison tasmania, 4.2.2 for aboriginal tasmania
							// 4.1.1 for prison sydney, 4.2.1 for aboriginal sydney
		this._lvl5Choice; // The choice the user made at 25 or 80 (level 5)
		this._lvl5Outcome; // Ending number
	}

	/**
	 * Changes the current ID to newId.
	 * @param {int} newId the new ID to set
	 */
	set currentId(newId) {
		this._currentId = newId; 
	}

	/** Returns the current Id */
	get currentId() {
		return this._currentId;
	}

	/**
	 * Processes the outcome of the user's choice. The option number represents
	 * which option the user chose. If they pressed the first button, optionNum
	 * would be 1.
	 * @param {int} optionNum the option number the user chose.
	 */
	processChoice(optionNum) {
		/*switch (this._currentId) {
			case 1:
				this.process1(optionNum);
				break;
			case 2:
				this.process2(optionNum);
				break;
			case 3:
				this.process3(optionNum);
				break;
			//etc.
		}*/ //Deprecated because it is unnecessary. Just call each 'process1' etc. dynamically
	}

	process1(optionNum) {
		switch (optionNum) {
			case 1:
				this._currentId = 2;
				break;
			case 2:
				this._currentId = 3;
				break;
		}
	}

	process2(optionNum) {
		this._currentId = 3;	
	}

	process3(optionNum) {
		this._currentId = 4;
	}

	process4(optionNum) {
		switch (optionNum) {
			case 1:
				this._currentId = 2; //~~~~~~~
				break;
			case 2:
				this._currentId = 5; //~~~~~~~~~~~~
				break;
		}
	}

	process5(optionNum) {
		this._lvl2Choice = optionNum;
		switch (optionNum) {
			case 1:
				this._currentId = 6;
				enablebutton();
				break;
			case 2:
				this._currentId = 7;
				enablebutton();
				break;
			case 3: 
				this._currentId = 8;
				enablebutton();
				break;
		}
	}

	processLevel3() {
		switch (this._lvl2Choice) {
			case 1:
				this._currentId = 9;
				break;
			case 2:
				this._currentId = 9;
				break;
			case 3:
				this._currentId = 10;
				break;
		}
	}

	process9(optionNum) {
		this._lvl3Choice = optionNum;
		switch (optionNum) {
			case 1:
				this._currentId = 11;
				enablebutton();
				break;
			case 2:
				this._currentId = 12;
				enablebutton();
				break;
			case 3:
				this._currentId = 13;
				enablebutton();
				break;
		}
	}

	process10(optionNum) {
		this._lvl3Choice = optionNum;
		switch (optionNum) {
			case 1:
				this._currentId = 14;
				enablebutton();
				break;
			case 2:
				this._currentId = 15;
				enablebutton();
				break;
			case 3:
				this._currentId = 16;
				enablebutton();
				break;
		}
	}

	processLevel4() {
		if (this._lvl2Choice == 1 || this._lvl2Choice == 2) {
			switch (this._lvl3Choice) {
				case 1:
					this._currentId = 21; 
					this._lvl3Outcome = "3.1";
					break;
				case 2:
					this._currentId = 21; // character in sydney prison
					this._lvl3Outcome = "3.1";
					break;
				case 3:
					this._currentId = 69; // character ended up in tasmania
					this._lvl3Outcome = "3.2";
					break;
			}
		} else {
			switch (this._lvl3Choice) {
				case 1:
					this._currentId = 69;
					this._lvl3Outcome = "3.2";
					break;
				case 2:
					this._currentId = 21;
					this._lvl3Outcome = "3.1";
					break;
				case 3:
					this._currentId = 21;
					this._lvl3Outcome = "3.1";
					break;
			}
		}
	}

	process69(optionNum) {
		this._currentId = 17;
	}

	process17(optionNum) {
		this._lvl4Choice = optionNum;
		switch (optionNum) {
			case 1:
				this._currentId = 18;
				enablebutton();
				break;
			case 2:
				this._currentId = 19;
				enablebutton();
				break;
			case 3:
				this._currentId = 20;
				enablebutton();
				break;
		}
	}

	process21(optionNum) {
		this._lvl4Choice = optionNum;
		switch (optionNum) {
			case 1:
				this._currentId = 22;
				enablebutton();
				break;
			case 2:
				this._currentId = 23;
				enablebutton();
				break;
			case 3:
				this._currentId = 24;
				enablebutton();
				break;
		}
	}

	processLevel5() {
		if (this._lvl3Outcome == "3.1") {
			// Character in Sydney
			switch (this._lvl4Choice) {
				case 1:
					this._currentId = 25; // character still in prison (sydney)					
					this._lvl4Outcome = "4.1.1" // prison sydney
					break;
				case 2:
					this._currentId = 25;
					this._lvl4Outcome = "4.1.1" // prison sydney
					break;
				case 3:
					this._currentId = 29; // character with the aboriginals
					this._lvl4Outcome = "4.2.1"; // aboriginals sydney
					break;
			}
		} else {
			// Character in Tasmania
			switch (this._lvl4Choice) {
				case 1:
					this._currentId = 80; // character still in prison (tasmania)
					this._lvl4Outcome = "4.1.2" // prison tasmania
					break;
				case 2:
					this._currentId = 80;
					this._lvl4Outcome = "4.1.2" // prison tasmania
					break;
				case 3:
					this._currentId = 29; // character with the aboriginals
					this._lvl4Outcome = "4.2.2"; // aboriginals tasmania
					break;
			}
		}
	}

	process25(optionNum) {
		// Location sydney
		this._lvl5Choice = optionNum;
		switch (optionNum) {
			case 1:
				this._currentId = 26;
				this._lvl5Outcome = 1; // ending 1
				enablebutton();
				break;
			case 2:
				this._currentId = 27;
				this._lvl5Outcome = 2;
				enablebutton();
				break;
			case 3:
				this._currentId = 28;
				this._lvl5Outcome = 3;
				enablebutton();
				break;
		}
	}

	process80(optionNum) {
		// Location Tasmania
		this._lvl5Choice = optionNum;
		switch (optionNum) {
			case 1:
				this._currentId = 26;
				this._lvl5Outcome = 1; // ending 1
				enablebutton();
				break;
			case 2:
				this._currentId = 27;
				this._lvl5Outcome = 2;
				enablebutton();
				break;
			case 3:
				this._currentId = 28;
				this._lvl5Outcome = 3;
				enablebutton();
				break;
		}
	}

	process29(optionNum) {
		this._lvl5Choice = optionNum;
		if (this._lvl4Outcome == "4.1.1" || this._lvl4Outcome == "4.2.1") {
			// Location mainland
			switch (optionNum) {
				case 1:
					this._currentId = 31;
					this._lvl5Outcome = 2; // ending 2
					enablebutton();
					break;
				case 2:
					this._currentId = 32;
					this._lvl5Outcome = 3; // ending 3
					enablebutton();
					break;
				case 3:
					this._currentId = 34;
					this._lvl5Outcome = 1; // ending 1
					enablebutton();
					break;
			}
		} else {
			// Location tasmania
			switch (optionNum) {
				case 1:
					this._currentId = 30;
					this._lvl5Outcome = 1;
					finishbutton();
					break;
				case 2:
					this._currentId = 32;
					this._lvl5Outcome = 3;
					finishbutton();
					break;
				case 3:
					this._currentId = 33;
					this._lvl5Outcome = 2;
					finishbutton();
					break;
			}
		}
	}

	processEnding() {
		switch (this._lvl5Outcome) {
			case 1:
				this._currentId = 35;
				break;
			case 2:
				this._currentId = 36;
				break;
			case 3:
				this._currentId = 37;
				break;
		}
	}

}



$(document).ready(function() {
	
	//This automatically refreshes the page to fix chrome resizing issues  ~~~~~~~~ Should be a temporary fix!
	$(window).resize(function() {
		window.location.reload();
	});

	// Initialize the character story
	var story = new CharacterStory();


	var slq_convict_data = JSON.parse(sessionStorage.getItem("slq_convict_data"));

	if (slq_convict_data) {
		console.log("Got convict data from session storage");
		iterate_convict_records(slq_convict_data);
	}
	else {
		var data = {
			resource_id: "6ab35f9a-e476-4d29-84de-2e18d1e704c7",
			limit: 9
		}

		$.ajax({
			url: "https://data.gov.au/api/3/action/datastore_search",
			data: data,
			dataType: "jsonp",
			cache: true,
			success: function(data) {
				sessionStorage.setItem("slq_convict_data", JSON.stringify(data));
				iterate_convict_records(data);
			}
		});
	}

	
	$(".events h3").click(function(e) {
		$(".events p, .events img").show();
		$(".events h3").hide();
	});
	
	$(".event-close").click(function(e) {
		$(".events h3").show();
		$(".events p, .events img").hide();
		$(".events").hide();
		$("#time").slider("enable");
	});

	function iterate_convict_records(data) {
		console.log(data);
		$.each(data.result.records, function(recordKey, recordValue) {
			var recordName = recordValue["ConvictName"];
			var recordVessel = recordValue["Vessel"];
			var recordDOD = recordValue["DateofDeparture"];
			var recordPOA = recordValue["PlaceofArrival"];
			var recordTitle = recordValue["Title"];
			
			
			if(recordName && recordVessel && recordDOD && recordPOA && recordTitle) {
				$("#convict_information").append(
						$('<div class="convict-card">').append(
							$('<div class="flip">').append(
								//front
								$('<div class="front-side">').append(
									$('<h2>').text(recordName)
								),
								//back
								$('<div class="back-side">').append(
									$('<h5>').text('Arrived in ' + recordPOA + ' on ship ' + recordVessel + " in " + recordDOD),
									$('<p>').text(recordTitle)
								)
							)
						)
				);
			}

		});
	}

	$('#map-tooltip').click(function() {
		$(this).hide(300);
	})





	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		SLQ Timeline Data
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	var populations = {
		"1780": {"sydney": 0, "vdl": 0, "moreton": 0, "swan": 0},
		"1789": {"sydney": 0, "vdl": 0, "moreton": 0, "swan": 0},
		"1804": {"sydney": 0, "vdl": 0, "moreton": 0, "swan": 0},
		"1838": {"sydney": 0, "vdl": 0, "moreton": 0, "swan": 0},
		"1868": {"sydney": 0, "vdl": 0, "moreton": 0, "swan": 0}
	};

	function timeline_ajax_call(data, storage_key, year) {
		$.ajax({
			url: "https://data.gov.au/api/3/action/datastore_search_sql",
			data: data,
			dataType: "jsonp",
			cache: true,
			success: function(data) {
				localStorage.setItem(storage_key, JSON.stringify(data));
				iterate_timeline_records(data, year);
			}
		});
	}

	function iterate_timeline_records(data, year) {
		console.log(data);

		var regex_sydney = /new south wales/i;
		var regex_vdl = /van diemen(.)?s land|v(.{0,3})d(.{0,3})i/i; //match van diemen's land or VDI
		var regex_moreton = /moreton/i;
		var regex_swan = /western/i;
		
		$.each(data.result.records, function(recordKey, RecordValue) {
			var PlaceofArrival = RecordValue.PlaceofArrival;

			if (regex_sydney.test(PlaceofArrival)) {
				/*sydney_cove_population += parseInt(RecordValue.count);*/
				populations[year].sydney += parseInt(RecordValue.count);
			}
			else if (regex_vdl.test(PlaceofArrival)) {
				populations[year].vdl += parseInt(RecordValue.count);
			}
			else if (regex_moreton.test(PlaceofArrival)) {
				populations[year].moreton += parseInt(RecordValue.count);
			}
			else if (regex_swan.test(PlaceofArrival)) {
				populations[year].swan += parseInt(RecordValue.count);
			}
		});

		/*console.log("\nFinal populations added per year: \n")
		$.each(populations, function(year, object) {
			console.log("\n" + year + ":\n");
			$.each(object, function(key, value) {
				console.log(key + ": " + value + "\n");
			});
		});*/
	}

	//--- 1789 ---
	var slq_timeline_data_1789 = JSON.parse(localStorage.getItem("slq_timeline_data_1789"));
	if (slq_timeline_data_1789) {
		console.log("Got timeline data from local storage");
		iterate_timeline_records(slq_timeline_data_1789, 1789);
	}
	else {		
		var data = {
			sql: "SELECT COUNT(*), \"PlaceofArrival\" \
			FROM \"6ab35f9a-e476-4d29-84de-2e18d1e704c7\" \
			WHERE \"DateofDeparture\" LIKE \'\%178_\%\' \
			GROUP BY \"PlaceofArrival\""
		}
		timeline_ajax_call(data, "slq_timeline_data_1789", 1789);		
	}

	//--- 1804 ---
	var slq_timeline_data_1804 = JSON.parse(localStorage.getItem("slq_timeline_data_1804"));
	if (slq_timeline_data_1804) {
		console.log("Got timeline data from local storage");
		iterate_timeline_records(slq_timeline_data_1804, 1804);
	}
	else {		
		var data = {
			sql: "SELECT COUNT(*), \"PlaceofArrival\" \
			FROM \"6ab35f9a-e476-4d29-84de-2e18d1e704c7\" \
			WHERE \"DateofDeparture\" LIKE \'\%179_\%\' OR \"DateofDeparture\" LIKE \'\%1800\%\' OR \"DateofDeparture\" LIKE \'\%1801\%\' OR \"DateofDeparture\" LIKE \'\%1802\%\' OR \"DateofDeparture\" LIKE \'\%1803\%\' OR \"DateofDeparture\" LIKE \'\%1804\%\' \
			GROUP BY \"PlaceofArrival\""
		}
		timeline_ajax_call(data, "slq_timeline_data_1804", 1804);		
	}

	//--- 1838 (note: actually up to 1839 otherwise would have been *huge* sql statement)
	var slq_timeline_data_1838 = JSON.parse(localStorage.getItem("slq_timeline_data_1838"));
	if (slq_timeline_data_1838) {
		console.log("Got timeline data from local storage");
		iterate_timeline_records(slq_timeline_data_1838, 1838);
	}
	else {		
		var data = {
			sql: "SELECT COUNT(*), \"PlaceofArrival\" \
			FROM \"6ab35f9a-e476-4d29-84de-2e18d1e704c7\" \
			WHERE \"DateofDeparture\" LIKE \'\%1805\%\' OR \"DateofDeparture\" LIKE \'\%1806\%\' OR \"DateofDeparture\" LIKE \'\%1807\%\' OR \"DateofDeparture\" LIKE \'\%1808\%\' OR \"DateofDeparture\" LIKE \'\%1809\%\' OR \"DateofDeparture\" LIKE \'\%181_\%\' OR \"DateofDeparture\" LIKE \'\%182_\%\' OR \"DateofDeparture\" LIKE \'\%183_\%\'\
			GROUP BY \"PlaceofArrival\""
		}
		timeline_ajax_call(data, "slq_timeline_data_1838", 1838);		
	}

	//--- 1868 (note: actually up to 1869 but it doesn't matter because no convicts transported after 1868 anyway)
	var slq_timeline_data_1868 = JSON.parse(localStorage.getItem("slq_timeline_data_1868"));
	if (slq_timeline_data_1868) {
		console.log("Got timeline data from local storage");
		iterate_timeline_records(slq_timeline_data_1868, 1868);
	}
	else {		
		var data = {
			sql: "SELECT COUNT(*), \"PlaceofArrival\" \
			FROM \"6ab35f9a-e476-4d29-84de-2e18d1e704c7\" \
			WHERE \"DateofDeparture\" LIKE \'\%184_\%\' OR \"DateofDeparture\" LIKE \'\%185_\%\' OR \"DateofDeparture\" LIKE \'\%186_\%\'\
			GROUP BY \"PlaceofArrival\""
		}
		timeline_ajax_call(data, "slq_timeline_data_1868", 1868);		
	}

	$("#time").slider({
		reversed: true
	});

	// Location objects
	var locations = {
		"sydney": $("#sydney-cove"), 
		"vdl": $("#van-diemens-land"), 
		"moreton": $("#moreton-bay"), 
		"swan": $("#swan-river-colony")
	};
	
	function timeline_change(years) {
		$.each(locations, function(locationIndex, locationValue) {
			var population = 0;
			$.each(years, function(yearKey, yearValue) {
				population += populations[yearValue][locationIndex];
			});
			if (population >= 1) {
				var width = parseFloat(locationValue.css("width"));
				//scale the size of the dot logarithmically (so it doesn't get too big)
				//width = (Math.log10(population)/Math.log10(1.2));
				width = 30 + (Math.pow(population, 1/2.6)^1.4);
				width += "px";
				locationValue.css({"width": width,"height": width}).addClass("map-dot-active");
				
			} else {
				locationValue.removeClass("map-dot-active").css({"width": "30px","height": "30px"});
			}
			//Update relevant location modal population HTML
			$("#" + locationValue.attr("id") + "-modal .convict-pop").text(population);
		});
	}








	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		Modal Functionality
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	$("#convict-btn").click(function() {
		$("#convict-modal").show();
	})
	
	$("#ship-btn").click(function() {
		$("#ship-modal").show();
		$("#ship-1-btn").click(function() {
			$("#ship-info-modal").show();
			$("#Neptune").show();
			$(".close").click(function() {
				$("#Neptune").hide();
			});
		})
		$("#ship-2-btn").click(function() {
			$("#ship-info-modal").show();
			$("#John_Renwick").show();
			$(".close").click(function() {
				$("#John_Renwick").hide();
			});
		})
		$("#ship-3-btn").click(function() {
			$("#ship-info-modal").show();
			$("#Friendship").show();
			$(".close").click(function() {
				$("#Friendship").hide();
			});
		})		
	});

	$(".map-dot").click(function(e) {
		var modal_id = $(this).attr('id') + "-modal";
		$("#" + modal_id).show();
	});

	$(".close, .close-btn").click(function() {
		$(this).parent().css("display", "none");
		$(this).parent().hide();
	});






	/*~~~~~~~~~~~~~~~~~~~
		    Clock
	~~~~~~~~~~~~~~~~~~~~*/
	
	var date = 1780;
	var previous_date;
	var current_date;
	var past_date;
	var direction;
	var time_pos = 1;
	//time_pos will replace timeline.getValue and the timeline wont be used for the clock only the button.
	
	function check_time() {
		var timelinevalue = time_pos;
		if (timelinevalue == 1) {
			previous_date = 1780;
			current_date = 1780;
			next_date = 1789;
			$("#level-indicator").css('height', '0%');
		} else if (timelinevalue == 2) {
			previous_date = 1780;
			current_date = 1789;
			next_date = 1804;
			$("#level-indicator").css('height', '18%');
			$("#level2").css('color', 'white');
		} else if (timelinevalue == 3) {
			previous_date = 1789;
			current_date = 1804;
			next_date = 1838;
			$("#level-indicator").css('height', '36%');
			$("#level3").css('color', 'white');
		} else if (timelinevalue == 4) {
			previous_date = 1804;
			current_date = 1838;
			next_date = 1868;
			$("#level-indicator").css('height', '54%');
			$("#level4").css('color', 'white');
		} else if (timelinevalue == 5) {
			previous_date = 1838;
			current_date = 1868;
			next_date = 1868
			$("#level-indicator").css('height', '72%');
			$("#level5").css('color', 'white');
		} else if (timelinevalue == 6) {
			$("#level-indicator").css('height', '89%');
			$("#finish").css('color', 'white');
			var previousId = story.currentId;
			story.processEnding();
			hideById(previousId);
			showById(story.currentId);
			characterBtnAddEmphasis();
		}
	}

	function calculate_date() {
		if ((current_date - past_date) < 0) {
			return 1
		}
		else {
			return 0
		}
	}

	function increase_date() {
		setInterval(function(){
			if (date < current_date) {
				date += 1;
				$('#clock').html(date);
			} 
		},50);
		
	}

	function decrease_date() {
		setInterval(function(){
			if (date > current_date) {
				date -= 1;
				$('#clock').html(date);
			}
		},50);
	
	}

	$('#clock').html(date);
	





	
	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		    Next Button
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	$('#timeline-forward').click(function() {
		$('#clock').toggleClass('active');
		
		disablebutton();
		setTimeout(function(){
			time_pos += 1;
			past_date = current_date;
			check_time();
			
			var timelinevalue = time_pos;
			console.log("Value from timeline: " + timelinevalue);
				
			if (timelinevalue != 1) {
				$("#time").slider("disable");
			}
			if (timelinevalue == 1) {
				timeline_change(["1780"]);
				$('#map-tooltip').hide(300);
			}
			if (timelinevalue == 2) {
				timeline_change(["1789"]);
				// Set the current id to the smallpox event
				var previousId = story.currentId;
				story.currentId = 5;
				hideById(previousId);
				showById(story.currentId);
				characterBtnAddEmphasis();
				/*setTimeout(function(){
					$("#character-main-btn").click();
				}, 3000);*/
				//$("#smallpox").show();

				setTimeout(function(){
					$('#map-tooltip').show(400);
				}, 1500);
			} else if (timelinevalue == 3) {
				timeline_change(["1789", "1804"]);
				var previousId = story.currentId;
				story.processLevel3();
				hideById(previousId);
				showById(story.currentId);
				characterBtnAddEmphasis();
				//$("#castle-hill").show();
				$('#map-tooltip').hide(300);
			} else if (timelinevalue == 4) {
				timeline_change(["1789", "1804", "1838"]);
				var previousId = story.currentId;
				story.processLevel4();
				hideById(previousId);
				showById(story.currentId);
				characterBtnAddEmphasis();
				//$("#myall-creek").show();
				$('#map-tooltip').hide(300);
			} else if (timelinevalue == 5) {
				timeline_change(["1789", "1804", "1838", "1868"]);
				var previousId = story.currentId;
				story.processLevel5();
				hideById(previousId);
				showById(story.currentId);
				characterBtnAddEmphasis();
				//$("#last-fleet").show();
				$('#map-tooltip').hide(300);
			}

			direction = calculate_date();
			if (direction == 0) {
				console.log('plus');
				increase_date();
			} 
			else if (direction == 1) {
				console.log('minus');
				decrease_date();
			}

			setTimeout(function(){
				$('#clock').toggleClass('active');
			},1000);
		
		},500);
		
	});
	
	function disablebutton() {
		$('#timeline-forward').prop('disabled', true);
		$('#timeline-forward').removeClass('timeline-forward');
		$('#timeline-forward').css({'cursor':'default', 'background-color': 'gray', 'color': 'lightgray'})
		
	}







	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		Character Interactions
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

	// Allows centering character text vertically when there are no buttons
	$(".character-choices").prev(".character-text").css("margin", "0");

	/* Character Section show and Hide */
	$(".minimise").click(function() {
		$("#character-section").removeClass("character-shown character-show");
		$("#character-section").addClass("character-hide");	
		setTimeout(function() {
			$("#character-section").addClass("character-hidden");
		}, 500);
		setTimeout(function() {
			$("#character-main-btn").removeClass("character-btn-hide");
		}, 200);
	});

	$("#character-main-btn").click(function() {
		characterBtnRemoveEmphasis();
		$("#character-section").removeClass("character-hidden character-hide");
		$("#character-main-btn").addClass("character-btn-hide");
		$("#character-section").addClass("character-shown character-show");
	});

	var characterEmphasisLoop;
	function characterBtnAddEmphasis() {
		characterEmphasisLoop = setInterval(function() {
			$("#character-main-btn").css("transform", "scale(1.18)");
			setTimeout(function() {
				$("#character-main-btn").css("transform", "");
			}, 500)
		}, 1800);
			
	}
	function characterBtnRemoveEmphasis() {
		clearInterval(characterEmphasisLoop);
	}

	/* Choose your own adventure functionality */
	function showById(idToShow) {
		$("#" + idToShow).removeClass("character-main-hidden");
	}
	function hideById(idToHide) {
		$("#" + idToHide).addClass("character-main-hidden");
	}

	
	showById(story.currentId);
	$("[class^='option']").click(function() {
		var previousId = story.currentId;
		var optionChoice = $(this).attr("class");
		var optionChoiceNum = optionChoice[optionChoice.length - 1];
		console.log(optionChoiceNum);
		//story.processChoice(parseInt(optionChoiceNum));
		story["process" + previousId](parseInt(optionChoiceNum));
		hideById(previousId);
		showById(story.currentId);
	});
	
	$(".end-option").click(function() {
		$(".minimise").click();
		setTimeout(function() {
			triggerEnding();
		}, 300);
	});

	function triggerEnding() {
		$("#end-modal").css("transform");
		$("#end-modal").show();
		$("#end-modal").css("transform", "translate(-50%) scale(1)");
	}

	$("#restart-btn").click(function() {
		window.location.reload();
	})

	



	/*~~~~~~~~~~~~~~~~~~~~~~~~~
		    Start Screen
	~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	$('#start-screen').click(function(e){
		$('#start-screen').addClass('remove-screen');
		$('#title').addClass('animate-title');
		$('#start-screen h2').css({'visibility': 'hidden'});
		$('#title').css({'font-size':'30pt', 'margin-top':'1.5%'});
		$('#start-screen').css({'height': '9%'});

		//show character
		setTimeout(function() {
			$("#character-main-btn").click();
		}, 600);
	});
	
});
