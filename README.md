# Some useful informations abouhe navigation 

props.navigation.push('routeName')

props.navigation.goBack() 

props.navigation.pop() //valable uniquement en stack navigation

props.navigation.popToTop() //retour au root screen 

props.navigation.replace('routeName') // attention dans ce cas on sort de la stack, ce qui peut être pratique 
dans certains cas comme pour une authentification 
