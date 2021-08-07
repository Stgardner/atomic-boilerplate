import { AppConfig } from "atomic";

import { routes, sections } from "../routes/"
import { cache } from "../cache"
const Config: AppConfig =
{
    appId: "atomic.boilerplate",
    version: "0.0.0",
    title: "Boilerplate",
    cache,
    about: "Its a boilerplate application",
    sections,
    routes,
    animated: true
}
export default Config;