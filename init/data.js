const doctors = [
    {
      name: "Dr. Ava Roberts",
      specializations: ["Cardiology", "Preventive Medicine"],
      address: "102 Heart Ave, Springfield, IL",
      phone: 5550123456,
      email: "ava.roberts@email.com",
      price: 250,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Noah Turner",
      specializations: ["Orthopedics", "Sports Medicine"],
      address: "202 Fitness Rd, Rockport, TX",
      phone: 5550123456,
      email: "noah.turner@email.com",
      price: 220,
      image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Mia Allen",
      specializations: ["Pediatrics", "Adolescent Medicine"],
      address: "303 Child St, Greenridge, CA",
      phone: 5550123456,
      email: "mia.allen@email.com",
      price: 180,
      image: "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Ethan Harris",
      specializations: ["Dermatology", "Cosmetic Dermatology"],
      address: "404 Glow Ln, Silverwood, CO",
      phone: 5550123456,
      email: "ethan.harris@email.com",
      price: 300,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Isabella Martinez",
      specializations: ["Neurology", "Epilepsy"],
      address: "505 Brainy Rd, Brookstone, NY",
      phone: 5550123456,
      email: "isabella.martinez@email.com",
      price: 270,
      image: "https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.jpg?s=2048x2048&w=is&k=20&c=BLoZsEopjCiEvwmyyy7LZqrRkrB7nvvhwzJsN5bZc9Y="
    },
    {
      name: "Dr. Lucas Gonzalez",
      specializations: ["Gastroenterology", "Digestive Disorders"],
      address: "606 Stomach Ave, Lakeside, FL",
      phone: 5550123456,
      email: "lucas.gonzalez@email.com",
      price: 230,
      image: "https://media.istockphoto.com/id/1320003833/photo/portrait-of-happy-caucasian-female-doctor-with-stethoscope-smile-in-arms-crossed-look-at.jpg?s=2048x2048&w=is&k=20&c=MgrbG-3Sgq-jtnMx9uaBU1NQYpiR49LJ-wUYWQ18HY4="
    },
    {
      name: "Dr. Sophia Perez",
      specializations: ["Obstetrics", "Maternal-Fetal Medicine"],
      address: "707 Maternity St, Seaview, NJ",
      phone: 5550123456,
      email: "sophia.perez@email.com",
      price: 320,
      image:"https://media.istockphoto.com/id/1015146822/photo/beautiful-doctor-standing-in-the-hospital.jpg?s=2048x2048&w=is&k=20&c=VZN7CFwOGPN4h_WSh2P_EVlRhAraIYuRVHjnYjw7r9s="
    },
    {
      name: "Dr. Liam Walker",
      specializations: ["Endocrinology", "Thyroid Diseases"],
      address: "808 Hormone Blvd, Hillcrest, OH",
      phone: 5550123456,
      email: "liam.walker@email.com",
      price: 250,
      image: "https://media.istockphoto.com/id/1355276152/photo/young-female-doctor.jpg?s=2048x2048&w=is&k=20&c=X71A3YQ1aL4Kv5loznUF8JzoP9KoNrQld0fK3wZ5Bpo="
    },
    {
      name: "Dr. Charlotte Scott",
      specializations: ["Ophthalmology", "Retina Surgery"],
      address: "909 Vision Rd, Clearfield, PA",
      phone: 5550123456,
      email: "charlotte.scott@email.com",
      price: 275,
      image:"https://media.istockphoto.com/id/1367507209/photo/portrait-of-indian-female-doctor-stock-photo.jpg?s=2048x2048&w=is&k=20&c=2pWNhHrCO--osTC9IuS9Pv6Ba7DiQVcZMdyqgHpdni4="
    },
    {
      name: "Dr. Benjamin White",
      specializations: ["Anesthesiology", "Critical Care"],
      address: "1010 Care Ln, Forest Heights, AZ",
      phone: 5550123456,
      email: "benjamin.white@email.com",
      price: 300,
      image: "https://media.istockphoto.com/id/1292860546/photo/portrait-female-doctor-stock-photo.jpg?s=2048x2048&w=is&k=20&c=5s6YMDFGMDm91gv6fjspNPYTK_0xPF5PsLnguGwviXU="
    },
    {
      name: "Dr. Grace Thompson",
      specializations: ["Oncology", "Radiation Therapy"],
      address: "1111 Tumor Ave, Lakeshore, TX",
      phone: 5550123456,
      email: "grace.thompson@email.com",
      price: 350,
      image: "https://media.istockphoto.com/id/1212211519/photo/portrait-happy-asian-woman-doctor-on-white-background.jpg?s=2048x2048&w=is&k=20&c=tHoVT9ZfqCd9bk0kTc9yJ-oFn83jUxIAGjyufLu_M-8="
    },
    {
      name: "Dr. Alexander Clark",
      specializations: ["Rheumatology", "Autoimmune Diseases"],
      address: "1212 Joint St, Maple Valley, NJ",
      phone: 5550123456,
      email: "alexander.clark@email.com",
      price: 240,
      image:"https://plus.unsplash.com/premium_photo-1661602389973-9974b1f53477?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Abigail Moore",
      specializations: ["Pulmonology", "Sleep Medicine"],
      address: "1313 Airway Blvd, Springtown, CA",
      phone: 5550123456,
      email: "abigail.moore@email.com",
      price: 220,
      image: "https://media.istockphoto.com/id/1701942673/photo/dentist-using-technology.jpg?s=2048x2048&w=is&k=20&c=rdHkzOSnqZ-BDsZG2cQ8R_DHwz_KRdaG2CgPJVTrnW0="
    },
    {
      name: "Dr. James Lewis",
      specializations: ["Plastic Surgery", "Reconstructive Surgery"],
      address: "1414 Restore Rd, Belleville, FL",
      phone: 5550123456,
      email: "james.lewis@email.com",
      price: 450,
      image:"https://images.unsplash.com/photo-1659353887238-d6c8506a1b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Harper Lee",
      specializations: ["Urology", "Kidney Diseases"],
      address: "1515 Uro St, Lakeside City, MN",
      phone: 5550123456,
      email: "harper.lee@email.com",
      price: 260,
      image:"https://media.istockphoto.com/id/1200980408/photo/beautiful-asian-doctor-lady-pointing-with-hand-on-copy-space-studio-shot-isolated-on-a-blue.jpg?s=2048x2048&w=is&k=20&c=36v5nOpeMkDgWZCnOtexeHMCtdXHUi_qEgUW84QHYuc="
    },
    {
      name: "Dr. Daniel Harris",
      specializations: ["Hematology", "Blood Disorders"],
      address: "1616 Bloodline Ave, Riverwood, WA",
      phone: 5550123456,
      email: "daniel.harris@email.com",
      price: 280,
      image:"https://media.istockphoto.com/id/1327959377/photo/female-doctor-using-stethoscope-listening-to-senior-patients-breathing.jpg?s=2048x2048&w=is&k=20&c=nfIzZUylLbGQnfTIFC_0nM1fnIVZlQD_Xm6Pg_o3iBM="
    },
    {
      name: "Dr. Ella King",
      specializations: ["Infectious Diseases", "Vaccination"],
      address: "1717 Immunity Rd, Northview, IL",
      phone: 5550123456,
      email: "ella.king@email.com",
      price: 210,
      image:"https://media.istockphoto.com/id/674101472/photo/doctor-checking-blood-pressure.jpg?s=2048x2048&w=is&k=20&c=Vci8Xvah3sDCC1MjQHSSFVgDBkSzJpEHbY-Fc0PsGiY="
    },
    {
      name: "Dr. Matthew Evans",
      specializations: ["General Surgery", "Trauma Surgery"],
      address: "1818 Trauma Ave, Parkville, TX",
      phone: 5550123456,
      email: "matthew.evans@email.com",
      price: 350,
      image:"https://media.istockphoto.com/id/916057930/photo/smiling-pretty-female-doctor-holding-empty-space.jpg?s=2048x2048&w=is&k=20&c=W1DYLLJ4XM0ebMF3l0jWbkXpyiSWvD7I_G7cWQ7teNM="
    },
    {
      name: "Dr. Lily Green",
      specializations: ["Psychiatry", "Child Psychiatry"],
      address: "1919 Mind St, Crestwood, CA",
      phone: 5550123456,
      email: "lily.green@email.com",
      price: 230,
      image:"https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Oliver Carter",
      specializations: ["Geriatrics", "Age-related Disorders"],
      address: "2020 Elder Rd, Quietbrook, MA",
      phone: 5550123456,
      email: "oliver.carter@email.com",
      price: 200,
      image: "https://media.istockphoto.com/id/1556008321/photo/beautiful-and-professional-female-doctor-using-laptop-computer-working-at-her-desk-in-the.jpg?s=2048x2048&w=is&k=20&c=NoAmQshlW5Dp8265WpoWE8fYMTYWG6Tp34eCElM75-A="
    }
  ];
module.exports={data:doctors};