export const dishesQuery = `*[_type == "dish"] | order(order asc) { _id, name, description, image, prepTime, cookTime, servings, cuisine, course, difficulty, category, ingredients, steps, chefNotes, chefTip }`
export const timelineQuery = `*[_type == "timeline"] | order(order asc) { _id, year, title, location, description, icon }`
export const pressQuery = `*[_type == "press"] | order(order asc) { _id, title, publication, date, description, link }`
export const reviewsQuery = `*[_type == "review"] | order(order asc) { _id, text, author, rating }`
export const awardsQuery = `*[_type == "award"] | order(order asc) { _id, title, organization, date, description, image }`
export const communityDemosQuery = `*[_type == "communityDemo"] | order(order asc) { _id, title, venue, date, description, link, youtubeLink, logo }`
export const siteSettingsQuery = `*[_type == "siteSettings"][0] { chefName, email, phone, restaurantName, address, googleMapsUrl, instagram, youtube, linkedin, facebook, whatsapp, medium }`
export const videosQuery = `*[_type == "video"] | order(order asc) { _id, title, youtubeUrl, channel, date, description }`
export const galleryQuery = `*[_type == "galleryItem"] | order(order asc) { _id, title, image, description, date, link }`
