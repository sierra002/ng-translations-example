import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { registerLocaleData, getCurrencySymbol } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es-CO';

import { HeroesService } from './heroes.service';
import { IHero } from './heroes.interface';
import { Router } from "@angular/router";
import { Meta } from "@angular/platform-browser";
import { LinkCardService } from "./shared/link-card.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private linkCardService: LinkCardService) {
    }

    ngOnInit() {
        const title = 'Angular Heroes app';
        const description = 'Angular Heroes app';
        const image = 'https://as.com/meristation/imagenes/2019/04/16/noticias/1555431500_663853_1555431594_noticia_normal.jpg';
        this.linkCardService.setMetaTags(title, description, image);
    }

}
