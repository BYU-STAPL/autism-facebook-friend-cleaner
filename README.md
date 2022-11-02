# STaPL Autism Team Facebook Friend Cleaner
The purpose of this cleaner is a proof of concept that there is a benefit provided to neurodiverse users by quickly showing/filtering their Facebook friends based on if they are probably a real or fake profile. A friend's profile is determined to probably be real or fake based on several criteria listed below. The use case is as a utility for someone who has a very large friends list that needs to be audited for friends that are somewhat obviously suspicious or fake, and speeding up the process of going through those friends to remove the ones that shouldn't be there.

# Structure

## Chrome extension
The Chrome extension of this project activates when a user is looking at their friends list on the Facebook website. It can read how many mutual friends the friend has off of the page, which is the only piece of private data that will be read from the friend's profile. It will then make a call to backend scraper, passing the identifiers of the friends to get information on. The scraper will return information about those friends, and then the extension will update the friends web page to reflect that data, indicating if a friend is probably real or fake and allowing the user to filter their friends based on this information. 

## Backend scraper
The backend scraper takes a request with identifiers for Facebook users and uses Selenium to navigate to their public profile pages to gather relevant data that might indicate if the account is real of fake. This data is then returned to the extension that made the call for use in updating the UI of the Facebook friends webpage. 

# Download / build instructions
Clone this project and follow the build instructions in the README for [the extension](chrome-extension/README.md) and [the scraper](backend-scraper/README.md).

# Todo list
- Determine exactly what can be information can be collected on friends of participants with IRB regulations and Facebook terms of service in mind as well as what can be easily collected and what would make the prototype most useful

See also the todo lists in `backend-scraper/` and `chrome-extension/`.

# Privacy concerns
The participants in this study can consent to giving data from their own Facebook profile for use in the study, but their friends who we are trying to analyze cannot. Because of this we will not be passing any user credentials to the backend scraper, and it will only be able to view publicly available information. It would also be questionable to perform operations with the participant's credentials on a separate system.

## Information that will be gathered directly from page by scraper
- Number of mutual friends
- Some identifier or link the scraper can use to view public profile information about the friend

## Friend information that is okay to be gathered by scraper
- If the friend has a profile picture

## Friend information that will not be gathered by scraper
- Sensitive item #1

# Studies about detecting fake accounts
We will not be able to get as sophisticated as these papers but they are a reference.
- [https://dl.acm.org/doi/pdf/10.1145/2556609]()
- [https://www.usenix.org/system/files/conference/soups2014/soups14-paper-rashtian.pdf]()
- [https://dl.acm.org/doi/pdf/10.1145/3366423.3380204]()
- [https://www.usenix.org/system/files/conference/soups2014/soups14-paper-rashtian.pdf]()
