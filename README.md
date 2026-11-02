Pretoria Community Kitchen POE Part 3

Project overview
A website for Pretoria Community Kitchen fighting hunger in Pretoria Central. It provides free daily meals, monthly food parcels and volunteer some opportunities. The website is made easy for people to find more information about our services, volunteer and get hold of us.

What I did in part 3
For part 3, I had to make sure the forms validste before submitting. I used JavaScript to check the data on the client side

What was validated:
- name: must be at least 3 characters
- email: must have an @ and .
- phone number: must be exactly 10 numbers ( exactly the pattern of 0-9)
- message: must be between 10 to 300 characters

Which is made for the enquiry and contact pages. The code is in js/script.js

Error handling
If everything is correct, it will show a green success box. When the enquiry form is valid, it will also show a small bix with cost and availability. For example, if someone selects Community meals it shows cost: FREE and availability: Daily 11am-2pm

 AJAX form submission
 In part 2 the form refreshing the page when clicked submit,for part 3 I changed that so the AJAX page does not reload.
 The same way the contact form compiles the message into an email to info@pretoriakitchen.org.za.

 SEO implemented
 - title tags: each page has a different titles. For example, Home has "Serving Hope Daily" and Services page has "Daily meals, food parcels and volunteering"
 - meta description: each page has its own descriptions of 150 characters
 - header tags: there is only h1 per page then h2 and h3
 - images: renamed the images to descriptions like "community meals, donations" and added alt text for all images.
 - internal linking:  added footer links that links all the pages together
 
 I also created robots.txt and sitemap.xml to add an open graph tag when someone decides to share the link on WhatsApp

 Other features
 - faq question: click on the question and it opens and closes
 - interactive map: used Leaflet.js to add a map on contact.html showing exactly where we are in Pretoria. You can just click on the marker and get directions
 - animations: few animations to amke thee site feel more alive, scroll progress bar at the top, confetti when the form is successful
 - gallery with lightbox: on the services page, if you click an image it becomes bigger

 Feedback fixed from part 2
 - enquiry page had no clear error message, so I fixed it by adding a red box that shows all the errors when the creditials are not added
 - images had no alt attributes so I added description alt text for every image
 - service filter, so I added service-card class and fixed IT ON JavaScript

 How to push to GitHub
 I used GitHub for version control

 Files for submission
 - all HTML files, index, about us, servives, enquiry and contact us
 - CSS and JavaScript
 - robots.txt and sitemap.xmal
 - README.md
 - GitHub link

 Technologies used:
 HTML5, CSS3, JavaScript, Leaflet.js for maps, GitHub

 References:
- Leaflet, 2026.[online] Available at: https://leafletjs.com/ [Accessed 10 May 2026].
- Lecturer  slides- WEDE5020 JavaScrip conditinal arrays functions
- Lecturer slides- WEDE5020 JavaScript form validation notes
- Mozilla Developer Network, 2026 [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 9 May 2026].
- Mozilla Developer Network, 2026. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API [Accessed 9 May 2026].
- Google Developers, 2026. [online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 8 May 2026].
- OpenStreetMap contributors, 2026. [online] Available at: https://www.openstreetmap.org [Accessed 10 May 2026].
- Schema.org, 2026. [online] Available at: https://schema.org/NGO [Accessed 9 May 2026].
- Netlify, 2026. [online] Available at: https://docs.netlify.com/ [Accessed 10 May 2026].
- GitHub, 2026.  [online] Available at: https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository [Accessed 10 May 2026].
- W3Schools, 2026. [online] Available at: https://www.w3schools.com/js/js_validation.asp [Accessed 8 May 2026].
- W3Schools, 2026.[online] Available at: https://www.w3schools.com/css/css3_animations.asp [Accessed 8 May 2026].