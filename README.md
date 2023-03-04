The application features a contemporary and user-friendly interface that has been developed using React and the MUI framework. The architecture comprises several components that function in tandem to deliver the requisite functionality. The key components are as follows:

    App: This serves as the primary component responsible for rendering the entire application.
    Main: Acts like a container to hold various sub components like search bar , card list and card info.
    Sidebar: This component is responsible for displaying information about the user and displays links to navigate to various sections of the application.
    Search: This component handles the search bar rendering and search functionality.
    CardsList: This component is responsible for rendering the movie cards and forwarding the selected movie to the CardDetails component.
    CardDetails: This component is responsible for rendering the movie details upon clicking and forwarding the information to the CardInfo component for display.
    CardInfo: This component renders the individual movie details along with buttons to play and add to the watchlist.
    Theming: This section of the code contains the theme of the application.

Please follow this link for a brief demo of the application: https://user-images.githubusercontent.com/13768494/222879747-31064995-efa5-4db9-bad7-9f04ebcd7e5a.mp4

The aforementioned is the production build of the application, which can be accessed at http://192.168.0.105:58061/.
