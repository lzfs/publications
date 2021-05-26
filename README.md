# Publications

This project was created as an assignment for the module 'Web Technologies' at the Bundeswehr Universität München.
The goal was to fetch data from 'AtheneForschung' and display it in a nice way.


## Run Application

Clone this repository with `git clone https://github.com/lzfs/publications` in your directory of choice.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in your browser.
If you're having trouble to start the application try `npm install` in the application directory.

## Features

* fetch data from 'AtheneForschung' with an Angular-Service
* parse this data into objects with matching attributes
* display this data in a convenient way with Material-Cards
* display the number of search results
* option to go to full publication by clicking on __zur Veröffentlichung__
* search functionality that uses the Athene-API
* basic paging-functionality with __mehr laden__ at the bottom

## Angular Material

Some of the components used in this project are from Angular Material, e.g. 
* MatInputModule
* MatCardModule
* MatFormFieldModule
* MatIconModule
* MatButtonModule

## Structure

1. Components
  * HeaderComponent
  * DashboardComponent
  * PublicationComponent

2. Service
  * publication-service that uses Angular-HttpClient to access 'AtheneForschung'

3. Datamodel
  * Response
  * Node
  * Attributes

## Target Group

* Faculties of our university

## Screenshot

<img width="948" alt="preview" src="https://user-images.githubusercontent.com/65385194/119633346-f2133a80-be11-11eb-9294-d15157a16096.PNG">

## Used Software

* NPM
* Angular
* Visual Studio Code
* Git
* GitHub
* Angular Material Library
* Firefox

## Contact

If you have questions or ideas for improvement please contact:
__laurenz.fuchs@unibw.de__




