const doctors = [
    {
      name: "Dr. Ava Roberts",
      specializations: ["Cardiology", "Preventive Medicine"],
      address: "102 Heart Ave, Springfield, IL",
      phone: 5550123456,
      email: "ava.roberts@email.com",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Noah Turner",
      specializations: ["Orthopedics", "Sports Medicine"],
      address: "202 Fitness Rd, Rockport, TX",
      phone: 5550123456,
      email: "noah.turner@email.com",
      price: 220,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Mia Allen",
      specializations: ["Pediatrics", "Adolescent Medicine"],
      address: "303 Child St, Greenridge, CA",
      phone: 5550123456,
      email: "mia.allen@email.com",
      price: 180,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Ethan Harris",
      specializations: ["Dermatology", "Cosmetic Dermatology"],
      address: "404 Glow Ln, Silverwood, CO",
      phone: 5550123456,
      email: "ethan.harris@email.com",
      price: 300,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Isabella Martinez",
      specializations: ["Neurology", "Epilepsy"],
      address: "505 Brainy Rd, Brookstone, NY",
      phone: 5550123456,
      email: "isabella.martinez@email.com",
      price: 270,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Lucas Gonzalez",
      specializations: ["Gastroenterology", "Digestive Disorders"],
      address: "606 Stomach Ave, Lakeside, FL",
      phone: 5550123456,
      email: "lucas.gonzalez@email.com",
      price: 230,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Sophia Perez",
      specializations: ["Obstetrics", "Maternal-Fetal Medicine"],
      address: "707 Maternity St, Seaview, NJ",
      phone: 5550123456,
      email: "sophia.perez@email.com",
      price: 320,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Liam Walker",
      specializations: ["Endocrinology", "Thyroid Diseases"],
      address: "808 Hormone Blvd, Hillcrest, OH",
      phone: 5550123456,
      email: "liam.walker@email.com",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Charlotte Scott",
      specializations: ["Ophthalmology", "Retina Surgery"],
      address: "909 Vision Rd, Clearfield, PA",
      phone: 5550123456,
      email: "charlotte.scott@email.com",
      price: 275,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Benjamin White",
      specializations: ["Anesthesiology", "Critical Care"],
      address: "1010 Care Ln, Forest Heights, AZ",
      phone: 5550123456,
      email: "benjamin.white@email.com",
      price: 300,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Grace Thompson",
      specializations: ["Oncology", "Radiation Therapy"],
      address: "1111 Tumor Ave, Lakeshore, TX",
      phone: 5550123456,
      email: "grace.thompson@email.com",
      price: 350,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Alexander Clark",
      specializations: ["Rheumatology", "Autoimmune Diseases"],
      address: "1212 Joint St, Maple Valley, NJ",
      phone: 5550123456,
      email: "alexander.clark@email.com",
      price: 240,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Abigail Moore",
      specializations: ["Pulmonology", "Sleep Medicine"],
      address: "1313 Airway Blvd, Springtown, CA",
      phone: 5550123456,
      email: "abigail.moore@email.com",
      price: 220,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. James Lewis",
      specializations: ["Plastic Surgery", "Reconstructive Surgery"],
      address: "1414 Restore Rd, Belleville, FL",
      phone: 5550123456,
      email: "james.lewis@email.com",
      price: 450,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Harper Lee",
      specializations: ["Urology", "Kidney Diseases"],
      address: "1515 Uro St, Lakeside City, MN",
      phone: 5550123456,
      email: "harper.lee@email.com",
      price: 260,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Daniel Harris",
      specializations: ["Hematology", "Blood Disorders"],
      address: "1616 Bloodline Ave, Riverwood, WA",
      phone: 5550123456,
      email: "daniel.harris@email.com",
      price: 280,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Ella King",
      specializations: ["Infectious Diseases", "Vaccination"],
      address: "1717 Immunity Rd, Northview, IL",
      phone: 5550123456,
      email: "ella.king@email.com",
      price: 210,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Matthew Evans",
      specializations: ["General Surgery", "Trauma Surgery"],
      address: "1818 Trauma Ave, Parkville, TX",
      phone: 5550123456,
      email: "matthew.evans@email.com",
      price: 350,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Lily Green",
      specializations: ["Psychiatry", "Child Psychiatry"],
      address: "1919 Mind St, Crestwood, CA",
      phone: 5550123456,
      email: "lily.green@email.com",
      price: 230,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    },
    {
      name: "Dr. Oliver Carter",
      specializations: ["Geriatrics", "Age-related Disorders"],
      address: "2020 Elder Rd, Quietbrook, MA",
      phone: 5550123456,
      email: "oliver.carter@email.com",
      price: 200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RMiyZFISTcW0YgeOGUT2QSU9NCYZ-uuvVw&s"
    }
  ];
module.exports={data:doctors};