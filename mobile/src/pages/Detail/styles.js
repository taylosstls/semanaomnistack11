
/**
 * Não tem diferença de estilização como H1, p, div, span, footer, header, etc.
 * React trabalha em formato de HTML5, eles são todos Display FLEX por padrão!
 * Tudo o que tinha "-" no css, fica em caixa alta
 * background-color => backgroundColor
 * 
 * Não existe herança de estilo
 * .container .titulo
 * 
 * Cada um terá o seu
 * 
 */

import { StyleSheet } from 'react-native';
// expo install expo-constants
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        lineHeight: 30,
        fontSize: 20,
        color: '#13131a',
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});