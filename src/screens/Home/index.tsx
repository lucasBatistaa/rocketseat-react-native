import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";
import { useState } from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    const handleParticipantAdd = () => {
        if (participants.includes(participantName.trim())) {
            return Alert.alert('Participante', 'Nome já cadastrado!')
        }

        setParticipants(prevState => [...prevState, participantName.trim()])
        setParticipantName('')
    }

    const handleParticipantRemove = (name: string) => {
        

        Alert.alert('Remover participante', `Você deseja remover o(a) participante ${name}?`, [
            { 
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
                    onChangeText={setParticipantName}
                    value={participantName}
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
