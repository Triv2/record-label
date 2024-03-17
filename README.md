# Soulpunx Website Guide
> This is a guide on how to use the Soulpunx web application.
<img src="https://github.com/Triv2/soulpunx/assets/126743500/055fbe8c-aea2-4bcf-939a-e11fd8c6f422" width="100%" height="50%" alt="soulpunx-header"/>


## Tech Stack
*Technologies used to make this website*
- Next.js 14 App router for the front-end
- Sanity for Content Management System
- Mailchimp for newsletter signup
- Nodemailer for contact form
- Shadcn-ui for UI components
- Framer Motion for animations
- React-Player for the video player

## Initial Setup
*Steps required to use the website*

**Accounts Required**
1. Sanity Account for the admin to manage the content.
2. Mailchimp account for Newsletter Signup
3. Email account for nodemailer to send all contact messages

**Technologies Required**
Node version 18.x

### To Clone Repository
``` 
git clone https://github/Triv2/soulpunx.git
```

*After cloning repo*

```
npm install
```

## Mailchimp Setup

*.env.local*
```
MAILCHIMP_API_KEY=""
MAILCHIMP_API_SERVER="us21"
MAILCHIMP_AUDIENCE_ID="a3e6c8b060"
```

<img src="https://github.com/Triv2/soulpunx/assets/126743500/7c18659f-8d6f-41d0-9490-06481dd17010" width="100%" height="50%" alt="mailchimp-setup1"/>

For the application to work with mailchimp these enviroment variables need to be set. 
The above image shows the location of the server in the web url and the audience ID is on the audience dashboard.

<img src="https://github.com/Triv2/soulpunx/assets/126743500/764458eb-c622-48c2-af3a-a1e5b86bd843" width="100%" height="50%" alt="mailchimp-setup2"/>

Click on your avatar in the top right and navigate to *Account and Billing*. Navigate to the extras tab, on the dropdown menu select API keys.
There you can create your mailchimp API Key. 




## Sanity Setup

*.env*
```
NEXT_PUBLIC_SANITY_PROJECT_ID="05031l80"
NEXT_PUBLIC_SANITY_DATASET="production"
```

<img src="https://github.com/Triv2/soulpunx/assets/126743500/6ae54259-fc56-4a88-87bd-2d9990312b39" width="100%" height="50%" alt="sanity-setup1"/>

Add the project ID to the .env and leave the dataset on production.

*After deploying the website*

<img src="https://github.com/Triv2/soulpunx/assets/126743500/7117baa3-a136-4d08-9c7f-4c7fcf3de0aa" width="100%" height="50%" alt="sanity-deployment-setup"/>

- Go to your sanity account dashboard for the project API tab
- Create a webhook and add in your websites new URL


## How to Use

To access the sanity CMS go to https://yourwebsiteurl/studio. Example: `https://soulpunx.vercel.app/studio`

Login with your sanity account credentials that is attached to the project.

<img src="https://github.com/Triv2/soulpunx/assets/126743500/612eacc9-8052-4a80-95bd-d3a69be880bf" width="100%" height="50%" alt="sanity-dashboard"/>

On the sanity left tab you will see several sections for content creation. 

<img src="https://github.com/Triv2/soulpunx/assets/126743500/fbe79a44-ad5f-4a09-9660-88c9ecbd10e5" width="100%" height="50%" alt="sanity-header"/>

When a tab is selected the content that has been published will be presented in the middle panel. 

<img src="https://github.com/Triv2/soulpunx/assets/126743500/6b16eaeb-e383-4be5-8299-5837dbb78ff0" width="100%" height="50%" alt="sanity-header2"/>

When a piece of content is selected the form to create and edit it is shown on the right.

<img src="https://github.com/Triv2/soulpunx/assets/126743500/528d112c-91fb-4130-88a8-84174b5b2069" width="100%" height="20%" alt="sanity-header3"/>
Whenever the admin is done editing or creating new content, scroll to the bottom of the right most panel and press the Publish button. 
If that button is not pressed it will not make the changes but save them as editing changes. 
All published content will be seen on the front-end of the website after 10-15 seconds.
The 3 dot button to the right is where the content can be unpublished or deleted.

## Header 
<img src="https://github.com/Triv2/soulpunx/assets/126743500/aa6a1aef-0dad-4832-bf06-c89636027300" width="100%" height="50%" alt="sanity-header"/>


**Routes**
- Home
- About
- Film

**Sections**
- Headers

**Form Values**
- Title: Must match the route where the data will be presented.
- Music Video: A bi-directional relationship to the music video content section. This adds all the video data presented in each respective section.
- Description: Value for the About and Film sections that will appear on the right side of the page header.

**How To Use**

<img src="https://github.com/Triv2/soulpunx/assets/126743500/fbe79a44-ad5f-4a09-9660-88c9ecbd10e5" width="100%" height="50%" alt="sanity-header"/>

For the Header content section controls the top of each of the main website routes: Home, About, and Film. 

<img src="https://github.com/Triv2/soulpunx/assets/126743500/9a405562-8a5a-440e-95dc-b5a071236826" width="100%" height="20%" alt="sanity-header2"/>
The system requires that these titles be exact for the data to transfer to the front-end.

<img src="https://github.com/Triv2/soulpunx/assets/126743500/71659980-5e38-4091-8070-075dd4253553" width="100%" height="20%" alt="sanity-header3"/>


The description section is only used in the Film and About pages to fill in the text to the right of the video.

<img src="https://github.com/Triv2/soulpunx/assets/126743500/bdf57013-55b1-403d-8c9e-ed66637b8e8b" width="100%" height="20%" alt="sanity-header4"/>


The music video section is for all the video details for the Home, About, and Film routes. It will display a thumbnail if provided from the youtube url, or a thumbnail that's uploaded with a video file upload.



## Release

<img src="https://github.com/Triv2/soulpunx/assets/126743500/4c81cdab-eb3d-425a-a719-fe3413a94d9c" width="100%" height="20%" alt="sanity-release"/>

**Routes**
- Home
- Artist
- Release

**Sections**
- New Releases
- Artist Releases
- Inspect Release


**Form Values**

- Title: Name of the Release, will be shown when hovering over a new release or an artist release.
- New?: A switch to turn off or on. If set to on it will be added to the list of images presented in the New Releases image carousel.
  *Only 12 new releases can be shown in the image carousel, this can be increased upon request*
- Artist: A bi-directional relationship to the Artist content section. Here the already published artist can be set or a new artist can be created that will generate a form from the Artist Content tab.
- Image: This is the image that will be shown for the release.
- Socials: A bi-directional relationship to the Socials content section. These are the links that will be shown the the user when the click on the release and navigate to the route. 

## Artist 
<img src="https://github.com/Triv2/soulpunx/assets/126743500/7f43f778-1c20-444c-aa7e-1cfc449c6140" width="100%" height="20%" alt="sanity-artist"/>


**Routes**
- Home
- Artists
- Artist
- Playlist
- Release

**Sections**
- New Releases
- Our-Work
- Inspect Playlist

**Form Values**

- Name: Name of the Artist. 
- Image: The image that will be shown on the arist's page route.
- Bio: A description section that will be shown on the right side of the artists page header.
- Socials: A bi-directional relationship to the Socials content section. Publish the artist before adding or creating the socials! This will be shown underneath the bio.
- Releases: A bi-directional relationship to the Release content section. Publish the artist before adding or creating the releases! This will be shown in the artists release section.
- Music Videos: A bi-directional relationship to the Music Video content section. This will be shown below the header in the artist's page video area.

## Social
<img src="https://github.com/Triv2/soulpunx/assets/126743500/fe18a369-97bb-4082-896a-8ff133a10468" width="100%" height="20%" alt="sanity-social"/>


> This is used in several different content sections: Artist, Release, Playlist, and Music Video. To avoid confusion it's better to create these within the other content sections and add them there as needed for re-usability. 

**Form Values**

- Title: A descriptor for the editor to organize the socials. No effect on the front-end.
- Artist: A bi-directional relationship to the Artist content section. Here the already published artist can be set or a new artist can be created that will generate a form from the Artist Content tab.
- Social Links: A dropdown selector for single-use to identify which service the link is associated with.
- Link: The weburl of the social service.

## Music Video
<img src="https://github.com/Triv2/soulpunx/assets/126743500/ca71aced-d298-4860-a09f-34adbb096534" width="100%" height="20%" alt="sanity-release"/>


**Routes** 
- Home
- Film
- Artist

**Sections**
- Video
- Our-work

**Form Values**

- Song Title: Name of the song, will be presented next to the artist name in the our-work sections.
- Thumbnail: Image that will be shown when the video is not playing.
- Link: Web URL for the video.
- Video: File Upload for Video.
- Use File?: A switch to determine whether the video used is from a weburl or an uploaded file. If only one field is filled, Video or Link, the video will always be shown despite the boolean choice.
- Artist: A bi-directional relationship to the Artist content section. Will be used to add the artist name to the title, this is an array so multiple artists can be added together for collabs.

## Playlist
<img src="https://github.com/Triv2/soulpunx/assets/126743500/c0dbcc75-557f-4cf5-adfe-65b04f2e6cd1" width="100%" height="20%" alt="sanity-release"/>


**Routes** 
- Home
- Playlist
  
**Sections** 
- Streaming Playlists

**Form Values**

- Title: Name of the playlist. This is shown on the playlist route.
- Socials: A bi-directional relationship to the Socials content section. The links for the streaming playlist services.
- Artist: A bi-directional relationship to the Artist content section. Associates the playlist to the artist, displays artist name on playlist route.
- Image: The image that will be shown for the Streaming Playlist on the homepage and playlist route.

## Profile
<img src="https://github.com/Triv2/soulpunx/assets/126743500/174b519d-5247-444f-a57c-111c32781fab" width="100%" height="20%" alt="sanity-release"/>

**Routes** 
- About

**Sections** 
- Employees

**Form Values**

- Name: Name of the individual. Shown on the employee in the About Section.
- Title: The employee's title within the company.
- Image: The employee's image.

## Imprint
<img src="https://github.com/Triv2/soulpunx/assets/126743500/e7b687ac-df58-4fe9-8786-470d5b2fd606" width="100%" height="20%" alt="sanity-release"/>


**Routes** 
- Imprint

- Name: Name of the company. Shown at the top of imprint page, every value follows in order from top to bottom.
- Title: 2nd Line of the imprint route.
- Address Line 1: Main address 
- Address Line 2: Mailing address
- Address Line 3: Headquarters location
- Telephone: Telephone number.
- Website: website url
- Email: Business Email Address
- VAT ID: Business VAT ID
- Telephone Hours: Hours of Operation.
