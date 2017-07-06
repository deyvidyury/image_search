import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
	images: any[];
	imagesFound: boolean = false;
	searching: boolean = false;
  pages:number[] = [10,20,30,40];
  selectedPerPage: number = 10;

  constructor(private _imageService: ImageService) { }

  handleSuccess(data){
    console.log(data);
  	this.images = data.hits;
  	this.imagesFound = true;
  }

  handleError(error){
  	console.log(error)
  }

  searchImages(query: string){
  	this.searching = true;
  	return this._imageService.getImage(query, this.selectedPerPage).subscribe(
  		data => this.handleSuccess(data), 
  		error => this.handleError(error), 
  		() => this.searching = false
  	)
  }

  ngOnInit() {
  }

}
