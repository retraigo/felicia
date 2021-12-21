<template>
  <div class="w-full p-8">
    <div class="flex flex-col items-stretch space-y-4 w-full">
      <div
        class="
          flex flex-col
          mx-auto
          md:flex-row
          space-y-4
          md:space-x-4 md:space-y-0
          w-full
          items-center
          justify-center
        "
      >
        <div class="p-2">
          <select
            v-model="honorific"
            title="Honorific"
            class="w-full p-2 h-12 bg-gray-100 border border-gray-400"
            required
          >
            <option value="def" disabled selected>Select a honorific</option>
            <option v-for="honor in honorifics" :key="honor" :value="honor">
              {{ honor }}
            </option>
          </select>
        </div>
        <div class="p-2">
          <input
            v-model="firstname"
            title="First Name"
            placeholder="First Name"
            :class="`w-full p-2 h-12 bg-gray-100 border ${firstname.length > 0 ? 'border-gray-400' : 'border-red-400'}`"
            type="text"
          />
        </div>
        <div class="p-2">
          <input
            v-model="lastname"
            title="Last Name"
            placeholder="Last Name"
            :class="`w-full p-2 h-12 bg-gray-100 border ${email.length > 0 ? 'border-gray-400' : 'border-red-400'}`"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-row items-center justify-center w-full">
        <div class="p-2 w-full max-w-2xl">
          <input
            v-model="email"
            title="Email"
            placeholder="Email"
            :class="`w-full p-2 h-12 bg-gray-100 border ${email.length > 0 ? 'border-gray-400' : 'border-red-400'}`"
            type="email"
          />
        </div>
      </div>
      <div class="flex flex-row items-center justify-center w-full">
        <div class="p-2 w-full max-w-2xl">
          <input
            v-model="phone"
            title="Phone Number"
            placeholder="Phone Number"
            :class="`w-full p-2 h-12 bg-gray-100 border ${(phone.length > 0 && testPhone() === true) ? 'border-gray-400' : 'border-red-400'}`"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-row items-center justify-center w-full">
        <div class="p-2 w-full max-w-2xl">
          <input
            v-model="organization"
            title="Organization"
            placeholder="Organization / Institution"
            :class="`w-full p-2 h-12 bg-gray-100 border ${organization.length > 0 ? 'border-gray-400' : 'border-red-400'}`"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-row items-center justify-center w-full">
        <div class="p-2 w-full max-w-2xl">
          <select
            v-model="country"
            title="Country"
            class="w-full p-2 h-12 bg-gray-100 border border-gray-400"
          >
            <option value="def" selected disabled>Select a country</option>
            <option v-for="honor in countries" :key="honor" :value="honor">
              {{ honor }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-row items-center justify-center w-full">
        <div class="p-2 w-full max-w-2xl">
          <label
            for="resume"
            title="Upload your resume"
            class="block hover:bg-gray-200 transition cursor-pointer duration-500 ease-in-out text-center w-full p-2 h-12 bg-gray-100 border border-gray-400"
            >+ Upload your Resume</label
          >
          <input id = "resume" type="file" class="hidden" />
        </div>
      </div>
            <div class="flex flex-row items-center justify-center w-full">
        <div class="p-2 w-full max-w-sm">
          <button
            class="hover:bg-gray-200 transition cursor-pointer duration-500 ease-in-out transform hover:translate-y-1 w-full p-2 h-12 bg-gray-100 border border-gray-400"
          >Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        submitForm() {
            this.checkSubmit()
        },
        checkSubmit() {
            return false
        },
        testPhone() {
            return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(this.phone)
        }

    },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      honorific: "def",
      phone: "",
      country: "def",
      organization: "",
      honorifics: ["Mr", "Mrs", "Miss", "Dr", "Prof", "Asst Prof"],
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands",
      ],
    };
  },
};
</script>