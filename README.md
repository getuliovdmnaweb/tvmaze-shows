# This is an amazing app for retrieving your favorite hero using marvel api.

## Technologies:

- React Native
- React Navigation
- Typescript
- Redux and Redux Saga

## Getting Started

#### APK Android
Apk's link was created with expo for android. Download Android [APK here]()

After downloading the apk drag and drop it to an emulator or try to install it on your Android device.

In case you did not succeed with the APK, try to run in debug mode using the following instructions.

#### Installing the App
First of all you need to install machine dependencies.
Verify if you have expo-cli installed on your machine.
For that run:

```
npm install --global expo-cli 
```

or

```
yarn global add expo-cli 
```
After that inside Project's folder install all of the dependencies running:

```
yarn install
```
After that start project with
```
yarn start
```
To be able to run the project you just need to download the expo application at the Stores and scan the QrCode that will be available at the terminal.
Alternatively, if you have an Android Emulator installed on your machine just press 'a' on the terminal and the expo will install it on your emulator or app.

## Branches:

#### It was created 5 Branches:
- **main**: It is used for production only. After it is decided to create a release, other branches can be merged to it.
- **development**: This is the main branch used for development. All of the features developed in other branches have Pull Requests created to this one.
- **feature/TVMAZESHOWS-001-list-shows**: Branch created to add features related to List Show screen.
- **feature/TVMAZESHOWS-002-show-detail**: Branch created to add features related to details of a particular show.
- **feature/TVMAZESHOWS-003-episode-detail**: Branch created to add features related to showing episode detail, like Image, season , air date.
- **feature/TVMAZESHOWS-004-save-favorite-series**: Branch created to add functionality to favorite a particular show.
- **feature/TVMAZESHOWS-005-sorting-alphabetically**: Branch created to sort alphabetically user's favorite shows..

## Project Structure:

#### The project has the following folders:
- **src**: The main folder where other folders are.
- **components**: Folder to export some components there are being used in the project, these components are:
  - **Header**:  A component to render Logo Image and a different element depending on the screen.
  - **Input**: A styled input with a Search Button.
  - **Show Card**: A component to display a Card to render show Image, Name, favorite Icon.
- **constants**: This is where is kept majority of the project's constants.
  - **colors.ts**: Some colors that are used throughout the project.
  - **images.ts**: File where we export images for the onBoarding screen, and enums for diferent Image Sizes(you can find the sizes in Marvels Documentation).
- **hooks**: Custom hooks used in the screens.
  - **useRedux**: Exporting two hooks in order to use typescript and redux properly.
  - **useSeasonEpisodes**: Hook to fetch episodes for each season.
- **navigators**: This is where we keep the main Tab Navigator, and Stack Navigator.
- **redux**: This is where we keep everything related to redux, such as, store, reducers, actions and sagas.
- **screens**: It is where we keep the code for the screens.
  - **EpisodeDetail**: Screen to detail important information for a particular Episode. 
  - **FavoriteShows**: Screen to list all of user's favorite shows.
  - **ListShows**: Screen to list and search for Shows by name.
  - **EpisodeDetail**: Screen to detail important information for a particular show.Also shows, a list of Episodes Separated by seasons.
- **types**: It is where it's defined interfaces and types used in the application.
- **helpers**: Folder to retrieve a helper function for sorting lists.
- **wrappers**: Components to remove complex logic from screen components.  
  - **LoadingEpisodes**: Component retrieves an ActivityIndicator or Children depending on loadingEpisodes redux state.
  - **LoadingShows**: Component retrieves an ActivityIndicator or Children depending on loadingShows redux state.
  - **SortingShows**: Component retrieves an ActivityIndicator or Children depending on loadingShows redux state.

## Considerations:

#### Mandatory Features: 

All mandatory features are implemented in the project.

#### Bonus Features:

- Allow the user to save a series as a favorite.
- Allow the user to delete a series from the favorites list.
- Allow the user to browse their favorite series in alphabetical order, and click on one to see its details.

