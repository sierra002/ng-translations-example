import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})
export class LinkCardService {

    constructor(private meta: Meta) {
    }

    setMetaTags(title: string, description: string, image: string, card = 'summary') {
        this.meta.updateTag({name: "og:url", property: "og:url", content: 'https://27079122.ngrok.io'});
        this.meta.updateTag({name: "og:type", property: "og:type", content: 'article'});
        this.meta.updateTag({name: "og:title", property: "og:title", content: title});
        this.meta.updateTag({name: "og:description", property: "og:description", content: description});
        this.meta.updateTag({name: "og:image", property: "og:image", content: image});

        this.meta.updateTag({name: "fb:app_id", content: '195961047636152'});

        this.meta.updateTag({name: "twitter:title", content: title});
        this.meta.updateTag({name: "twitter:description", content: description});
        this.meta.updateTag({name: "twitter:image", content: image});
        this.meta.updateTag({name: "twitter:card", content: card});
    }
}
