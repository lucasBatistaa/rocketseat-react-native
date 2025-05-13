import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
    const participants = ['Rodrigo', 'Vini', 'Diego', 'Stephanie', 'Lucas', 'Rafael', 'Luana', 'Fábio', 'Elias']

    const handleParticipantAdd = () => {
        if (participants.includes('Lucas')) {
            return Alert.alert('Participante', 'Nome já cadastrado!')
        }
    }

    const handleParticipantRemove = (name: string) => {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            { 
                text: 'Sim',
                onPress: () => Alert.alert('Participante deletado!')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
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

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map((participant, index) => (
                        <Participant
                            key={index}
                            name={participant}
                            onRemove={() => handleParticipantRemove()}
                        />
                    ))
                }
            </ScrollView> */}

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                            key={item}
                            name={item}
                            onRemove={() => handleParticipantRemove(item)}
                        />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém no evento ainda? Adicione participantes!
                    </Text>
                )}
            />
            
        </View>
    )
};
