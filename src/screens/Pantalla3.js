import React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Pantalla3 = ({ navigation }) => {
    const informacion = data;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    const coloresAquosos = [
        { id: '1', nombre: 'Turquoise', descripcion: '#5DC1B9', imagen: 'https://www.gemselect.com/photos/turquoise/turquoise-gem-675908a.jpg' },
        { id: '2', nombre: 'Emerald', descripcion: '#00554E', imagen: 'https://www.withclarity.com/cdn/shop/articles/EMERALD_MEANING.jpg?v=1698291799' },
        { id: '3', nombre: 'Peter river', descripcion: '#3498DB', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWSRlwIsJVr_FTV26TpKOWgFHM_TqsP71PBPa1J4law&s' },
        { id: '4', nombre: 'Amethyst', descripcion: '#898ac0', imagen: 'https://m.media-amazon.com/images/I/71TIuyGllzS._AC_UF894,1000_QL80_.jpg' },
        { id: '5', nombre: 'Wet asphalt', descripcion: '#5C5E58', imagen: 'https://t3.ftcdn.net/jpg/03/17/88/12/360_F_317881201_U15orHMiBIIpHfuQuvObh37fZM8KEbsZ.jpg' },
        { id: '6', nombre: 'Green sea', descripcion: '#2E8B57', imagen: 'https://images.unsplash.com/photo-1574781373394-c22213d93862?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBzZWF8ZW58MHx8MHx8fDA%3D' }
    ];

    const coloresCalidos = [
        { id: '1', nombre: 'Nephritis', descripcion: '#27AE60', imagen: 'https://www.gemselect.com/photos/turquoise/turquoise-gem-675908a.jpg' },
        { id: '2', nombre: 'Belize hole', descripcion: '#2980B9', imagen: 'https://www.withclarity.com/cdn/shop/articles/EMERALD_MEANING.jpg?v=1698291799' },
        { id: '3', nombre: 'Wisteria', descripcion: '#8E44AD', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWSRlwIsJVr_FTV26TpKOWgFHM_TqsP71PBPa1J4law&s' },
        { id: '4', nombre: 'Midnight blue', descripcion: '#2C3E50', imagen: 'https://m.media-amazon.com/images/I/71TIuyGllzS._AC_UF894,1000_QL80_.jpg' },
        { id: '5', nombre: 'Sun flower', descripcion: '#F1C40F', imagen: 'https://t3.ftcdn.net/jpg/03/17/88/12/360_F_317881201_U15orHMiBIIpHfuQuvObh37fZM8KEbsZ.jpg' },
        { id: '6', nombre: 'Carrot', descripcion: '#E67E22', imagen: 'https://images.unsplash.com/photo-1574781373394-c22213d93862?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBzZWF8ZW58MHx8MHx8fDA%3D' }
    ];

    const otrosColores = [
        { id: '1', nombre: 'Alizarin', descripcion: '#E74C3C', imagen: 'https://www.gemselect.com/photos/turquoise/turquoise-gem-675908a.jpg' },
        { id: '2', nombre: 'Clouds', descripcion: '#ECF0F1', imagen: 'https://www.withclarity.com/cdn/shop/articles/EMERALD_MEANING.jpg?v=1698291799' },
        { id: '3', nombre: 'Orange', descripcion: '#95A5A6', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWSRlwIsJVr_FTV26TpKOWgFHM_TqsP71PBPa1J4law&s' },
        { id: '4', nombre: 'Pumpkin', descripcion: '#F39C12', imagen: 'https://m.media-amazon.com/images/I/71TIuyGllzS._AC_UF894,1000_QL80_.jpg' },
        { id: '5', nombre: 'Pomegranate', descripcion: '#D35400', imagen: 'https://t3.ftcdn.net/jpg/03/17/88/12/360_F_317881201_U15orHMiBIIpHfuQuvObh37fZM8KEbsZ.jpg' },
        { id: '6', nombre: 'Silver', descripcion: '#BDC3C7', imagen: 'https://images.unsplash.com/photo-1574781373394-c22213d93862?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBzZWF8ZW58MHx8MHx8fDA%3D' }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.sectionContainer}>
                <View style={styles.grayBox}>
                    <Text style={styles.grayBoxText}>Colores aquosos</Text>
                </View>
                <FlatList
                    data={coloresAquosos}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.flatlistContainer}
                    renderItem={({ item }) => (
                        <View style={[styles.card, { backgroundColor: item.descripcion }]}>
                            <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                            <Text style={styles.cardText}>{item.nombre}</Text>
                            <Text style={styles.cardDescription}>{item.descripcion}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.grayBox}>
                    <Text style={styles.grayBoxText}>Colores cálidos</Text>
                </View>
                <FlatList
                    data={coloresCalidos}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.flatlistContainer}
                    renderItem={({ item }) => (
                        <View style={[styles.card, { backgroundColor: item.descripcion }]}>
                            <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                            <Text style={styles.cardText}>{item.nombre}</Text>
                            <Text style={styles.cardDescription}>{item.descripcion}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.grayBox}>
                    <Text style={styles.grayBoxText}>Otros colores</Text>
                </View>
                <FlatList
                    data={otrosColores}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.flatlistContainer}
                    renderItem={({ item }) => (
                        <View style={[styles.card, { backgroundColor: item.descripcion }]}>
                            <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                            <Text style={styles.cardText}>{item.nombre}</Text>
                            <Text style={styles.cardDescription}>{item.descripcion}</Text>
                        </View>
                    )}
                />
            </View>
            <Boton
                textoBoton='Ir a creditos'
                accionBoton={irPantalla2}
            />
        </ScrollView>
    );
};

export default Pantalla3;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        paddingVertical: 20,
    },
    sectionContainer: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    grayBox: {
        backgroundColor: '#ccc',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center',
    },
    grayBoxText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    flatlistContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    card: {
        borderRadius: 8,
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        width: '31%',
        height: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
    },
    cardText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 12,
    },
});
