
import React from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity, Modal } from 'react-native';

import { styles } from '../components/Style';

export const _renderFooter = () => {
    <View style={{alignSelf: 'center', marginVertical: 20}}>
        <ActivityIndicator />
    </View>
};

export const _renderBtn = (
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
    onpress) =>
    <View style={styles.cardbox}>
        <Text style={styles.scrollTextTitleBig}>
            <Text style={styles.scrollText}>{name}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Data Nascimento: 
            <Text style={styles.scrollText}> {birth_year}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Genero: 
            <Text style={styles.scrollText}> {gender}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Peso: 
            <Text style={styles.scrollText}> {height}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Massa: 
            <Text style={styles.scrollText}> {mass}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Cor de pele: 
            <Text style={styles.scrollText}> {skin_color}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Cor dos Olhos: 
            <Text style={styles.scrollText}> {eye_color}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Cor de Cabelo:
            <Text style={styles.scrollText}> {hair_color}</Text>
        </Text>
        <View style={{ justifyContent:'center', alignItems:'center' }}>
            <TouchableOpacity style={styles.scrollButton} onPress={() => onpress()} rejectResponderTermination>
            <Text style={styles.scrollButtonText}>dados detalhado</Text>
            </TouchableOpacity>
        </View>
    </View>

export const _renderSpecies = (
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    hair_colors,
    language,
    name,
    skin_colors) =>
    <View style={styles.cardbox}>
        <Text style={styles.scrollTextTitleBig}>Espécie:
            <Text style={styles.scrollText}> {name}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Língua: 
            <Text style={styles.scrollText}> {language}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Média de Altura: 
            <Text style={styles.scrollText}> {average_height}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Média Expectiva de Vida: 
            <Text style={styles.scrollText}> {average_lifespan}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Classificação: 
            <Text style={styles.scrollText}> {classification}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Designação: 
            <Text style={styles.scrollText}> {designation}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Cores de peles: 
            <Text style={styles.scrollText}> {skin_colors}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Cores dos Olhos: 
            <Text style={styles.scrollText}> {eye_colors}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Cores de Cabelo:
            <Text style={styles.scrollText}> {hair_colors}</Text>
        </Text>
    </View>

export const _renderPlanet = (
    climate,
    diameter,
    gravity,
    name,
    orbital_period,
    population,
    rotation_period,
    surface_water,
    terrain) =>
    <View style={styles.cardbox}>
        <Text style={styles.scrollTextTitleBig}>Planeta:
            <Text style={styles.scrollText}> {name}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Clima: 
            <Text style={styles.scrollText}> {climate}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Diâmetro: 
            <Text style={styles.scrollText}> {diameter}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Gravidade: 
            <Text style={styles.scrollText}> {gravity}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Órbita: 
            <Text style={styles.scrollText}> {orbital_period}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>População: 
            <Text style={styles.scrollText}> {population}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Rotação: 
            <Text style={styles.scrollText}> {rotation_period}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Água da Superfície: 
            <Text style={styles.scrollText}> {surface_water}</Text>
        </Text>
        <Text style={styles.scrollTextTitle}>Terreno:
            <Text style={styles.scrollText}> {terrain}</Text>
        </Text>
    </View>

export const _renderModal = (modalVisible, name = null, specie = null, planet = null, onpress) =>
    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>
        <View style={styles.modalbox}>
            <Text style={styles.modaltitle}>{name}</Text>
            {specie != null && _renderSpecies(
                specie.average_height,
                specie.average_lifespan,
                specie.classification,
                specie.designation,
                specie.eye_colors,
                specie.hair_colors,
                specie.language,
                specie.name,
                specie.skin_colors
            )}

            {planet != null && _renderPlanet(
                planet.climate,
                planet.diameter,
                planet.gravity,
                planet.name,
                planet.orbital_period,
                planet.population,
                planet.rotation_period,
                planet.surface_water,
                planet.terrain
            )}
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity style={styles.scrollButton} 
                    rejectResponderTermination 
                    onPress={() => onpress()} >
                    <Text style={styles.scrollButtonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>