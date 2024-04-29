import { Component, OnInit } from '@angular/core';
import {MatRippleModule} from "@angular/material/core";
import {Router, RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {TagService} from "../../../../services/tag.service";
import {NgForOf} from "@angular/common";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  standalone: true,
  imports: [
    MatRippleModule,
    RouterLink,
    MatIconModule,
    NgForOf
  ],
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  systemTags:any;
  resultProducts:any;

  constructor(private router:Router,private tagService: TagService,private productService: ProductService) { }

  ngOnInit(): void {
    this.tagService.getAllTags().subscribe((data:any)=>{
      this.systemTags = data.data.content;
    })
  }

  redirectToSearchResults(tag:any) {
    const queryParams: any = {
      where: 'Anywhere',
      when: 'Today',
      time: 'Anytime',
      adults: 0,
      children: 0
    };

    this.productService.getAllProducts().subscribe((data:any)=>{
      this.resultProducts = data.filter((each: { tags: { name: any; }[]; }) => each.tags.map((e: { name: any; }) => e.name).includes(tag.name));
      localStorage.setItem("searchResultRestaurantList", JSON.stringify(this.resultProducts));
      localStorage.setItem("viewRestaurantList", JSON.stringify(this.resultProducts));
      localStorage.setItem("isFilterClicked", "yes");
    })

    this.router.navigate(['/search'], { queryParams });
  }

}
