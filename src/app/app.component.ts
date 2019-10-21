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
        /*<meta property="og:title" content="When Great Minds Don’t Think Alike"/>
        <meta property="og:description" content="How much does culture influence creative thinking?"/>
        <meta property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"/>
        <meta property="fb:app_id" content="195961047636152"/>

        <meta property="twitter:title" content="Cristian es un puto">
        <meta property="twitter:description" content="Tres tristes cristian">
        <meta property="twitter:image" content="https://www.ozoneheroes.org/assets/img/ironmanclipped.png">
        <meta property="twitter:card" content="summary">*/
    }

}
