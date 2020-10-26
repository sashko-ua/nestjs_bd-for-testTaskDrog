import { Url } from "url";

export interface Photo {
    readonly id: number;
    readonly url: Url;
}