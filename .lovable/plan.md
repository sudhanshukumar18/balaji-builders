

## Add Second Office Address

Add a new office location "2 Pratap Nagar, Nagpur" to both the Contact page and the Footer.

### Changes

**1. `src/pages/Contact.tsx`**
- Add a second address card below the existing Wardha address card showing "Pratap Nagar, Nagpur, Maharashtra"
- Update the FAQ answer about service areas to mention the Nagpur office

**2. `src/components/Footer.tsx`**
- Add the Nagpur address below the existing Wardha address in the Contact Us section, separated by a small divider or spacing

### Technical Details

- Both locations will share the same MapPin icon styling
- The existing Wardha address remains as-is; the Nagpur address is appended below it
- The Google Maps embed on the Contact page will remain focused on Wardha (or can be updated to show both)

