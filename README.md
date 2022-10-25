# STaPL Autism Team Facebook Friend Cleaner
The purpose of this cleaner is a proof of concept that there is a benefit provided to neurodivergent users by quickly showing/filtering their facebook friends based on if they are probably a real or fake profile. A friend's profile is determined to probably be real or fake based on several criteria listed below. The use case is as a utility for someone who has a very large friends list that needs to be audited for friends that are somewhat obviously suspicious or fake, and speeding up the process of going through those friends to remove the ones that shouldn't be there.

## Structure

#### Chrome extension
The chrome extension of this project activates when a user is looking at their friends list on the facebook website. It can read how many mutual friends the friend has off of the page, which is the only piece of private data that will be read from the friend's profile. It will then make a call to backend scraper, passing the identifiers of the friends to get information on. The scraper will return information about those friends, and then the extension will update the friends web page to reflect that data, indicating if a friend is probably real or fake and allowing the user to filter their friends based on this information. 

#### Backend scraper
The backend scraper takes a request with identifiers for facebook users and uses selenium to navigate to their public profile pages to gather relevant data that might indicate if the account is real of fake. This data is then returned to the extension that made the call for use in updating the UI of the facebook friends webpage. 

## Download / build instructions

#### 1.
Clone the project

## Todo list

#### Project
- Determine exactly what can be information can be collected on friends of participants with IRB regulations and facebook terms of service in mind as well as what can be easily collected and what would make the prototype most useful

#### Extension
- Automatically gather number of mutual friends for each friend straight from the webpage
- Fix the way the scraper script runs - currently it runs once when a user navigates to the facebook friends page so it doesn't ever even see friends rows that don't load until you scroll down
- Create a dropdown for filtering with the options: show all, show possibly real, show possibly fake
- Make a call to backend scraper for additional information on friends and apply the information returned to the friends web page

#### Scraper
- Salvage existing code from youtube privacy scraper
- TBD after salvaging previous code

## Privacy concerns
The participants in this study can consent to giving data from their own facebook profile for use in the study, but their friends who we are trying to analyze cannot. Because of this we will not be passing any user credentials to the backend scraper, and it will only be able to view publicly available information. It would also be questionable to perform operations with the participant's credentials on a separate system.

#### Information that will be gathered directly from page by scraper
- Number of mutual friends
- Some identifier or link the public scraper can use to view public profile information about the friend

#### Information that is okay to gather about friends on scraper
- If the friend has a profile picture

#### Information that will not be gathered by users on scraper
- Sensitive item #1
