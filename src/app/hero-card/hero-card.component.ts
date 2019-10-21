import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IHero } from "../heroes.interface";
import { HeroesService } from "../heroes.service";
import { LinkCardService } from "../shared/link-card.service";

@Component({
    selector: 'jhz-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
    public hero: IHero;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private heroesService: HeroesService,
                private linkCardService: LinkCardService) {
    }

    backClicked() {
        this.router.navigate([''])
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.heroesService.getHeroes().subscribe((hero) => {
                this.hero = hero.find((hero) => {
                    return hero.id === params.get('hero')
                }) || {};
                this.linkCardService.setMetaTags(this.hero.name, this.hero.about, this.hero.squarePic || this.hero.picture)
            })
        });

        this.route.queryParamMap.subscribe(queryParams => {
            queryParams.get('hero')
        });

        console.log('heroCardComponent');
    }

}
