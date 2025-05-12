import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
    const participants = ['Rodrigo', 'Vini', 'Diego', 'Stephanie', 'Lucas', 'Rafael', 'Luana', 'Fábio', 'Elias']

    const handleParticipantAdd = () => {
        console.log('Você clicou no botão!')
    }

    const handleParticipantRemove = () => {
        console.log('Você clicou no botão de remover!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                The Town
            </Text>

            <Text style={styles.subtitle}>
                Sábado - 4 de dezembro de 2025.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map((participant, index) => (
                        <Participant
                            key={index}
                            name={participant}
                            onRemove={() => handleParticipantRemove()}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
};
