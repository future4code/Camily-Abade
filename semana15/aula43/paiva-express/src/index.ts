import { app } from "./app"
import { getSearch } from "./endpoints/getSearch"
import { getAllCountries } from "./endpoints/getAllCountries"
import { getCountryById } from "./endpoints/getCountryById"
import { getNewCountry } from "./endpoints/getNewCountry"

app.get("/countries", getAllCountries)
app.get("/countries/search", getSearch)

app.get("/countries/:id", getCountryById)
app.post("/countries/:id", getNewCountry) // nunca será acessada );
