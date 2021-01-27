function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
    description: 'ServU'
    });
  }

resetDefaultSuggestion();


chrome.omnibox.onInputChanged.addListener(
    function(text, suggest)
    {
		var suggestions = [];
		suggestions.push({ content: "https://servu.ssfcu.org/SC/ServiceCatalog/RequestOffering/e8d7110b-c7a2-38ec-9ec9-9d2ce416f377,8579a49d-9eac-a8d3-66b0-4345cf8e8ef6", description: "Enter SMTP Ticket" });
		
		suggestions.push({ content: "https://servu.ssfcu.org/View/c5161e06-2378-4b44-aa89-5600e2d3b9d8", description: "Go to My Requests" });

		suggestions.push({ content: "https://servu.ssfcu.org/View/cca5abda-6803-4833-accd-d59a43e2d2cf", description: "Go to My Work (Requests assigned to me)" });

		suggestions.push({ content: "https://servu.ssfcu.org/ServiceRequest/New/8eecffc5-4519-9b1d-051c-44922257f116", description: "Create a new generic request" });		

		suggestions.push({ content: "https://servu.ssfcu.org/View/c5161e06-2378-4b44-aa89-5600e2d3b9d8", description: "Go to My Requests" });

		suggestions.push({ content: "https://servu.ssfcu.org/View/c5161e06-2378-4b44-aa89-5600e2d3b9d8", description: "Go to My Requests" });		
		
		suggest(suggestions);
    }
);

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text)
    {
		if (text.toUpperCase().substr(0, 2) == 'RQ') {
            navigate("https://servu.ssfcu.org/ServiceRequest/Edit/" + text.toUpperCase());
        } else if (text.toUpperCase().substr(0, 2) == 'IR') {
            navigate("https://servu.ssfcu.org/Incident/Edit/" + text.toUpperCase());
        } else if (text.toUpperCase().substr(0, 4) == 'SMTP') {
            navigate("https://servu.ssfcu.org/SC/ServiceCatalog/RequestOffering/e8d7110b-c7a2-38ec-9ec9-9d2ce416f377,8579a49d-9eac-a8d3-66b0-4345cf8e8ef6");
	    } else if (text.toUpperCase().substr(0, 2) == 'MY') {
            navigate("https://servu.ssfcu.org/View/c5161e06-2378-4b44-aa89-5600e2d3b9d8");
	    } else if (text.toUpperCase().substr(0, 2) == 'DL') {
            navigate("https://servu.ssfcu.org/SC/ServiceCatalog/RequestOffering/0b661c10-dc30-b886-2b90-2d9974f09d57,cd348853-831d-13f5-db36-264dd6932d6f");
		} else if (text.toUpperCase().substr(0, 2) == 'ME') {
            navigate("https://servu.ssfcu.org/View/cca5abda-6803-4833-accd-d59a43e2d2cf");
        } else if (text.toUpperCase().substr(0, 3) == 'NEW') {
            navigate("https://servu.ssfcu.org/ServiceRequest/New/8eecffc5-4519-9b1d-051c-44922257f116");
        } else if (text.toUpperCase().substr(0, 4) == 'SNAP') {
            navigate("https://servu.ssfcu.org/SC/ServiceCatalog/RequestOffering/ce29630b-6549-c05b-8d3e-846535b22c82,8579a49d-9eac-a8d3-66b0-4345cf8e8ef6");
        } else if (text.toUpperCase().substr(0, 4) == 'SPAM') {
            navigate("https://servu.ssfcu.org/SC/ServiceCatalog/RequestOffering/083b75ac-0837-f892-f01b-76324d8d9e62,cd348853-831d-13f5-db36-264dd6932d6f");
        } else if (text.toUpperCase().substr(0, 4) == 'HOME') {
            navigate("https://servu.ssfcu.org/ServiceCatalog/Listing/");
		}else {
            searchString = text;
			searchUrl = 'https://servu.ssfcu.org/ServiceCatalog/Listing/#/Search/searchText=' + searchString + '&searchType=All';
			navigate(searchUrl);
    }
		}
);