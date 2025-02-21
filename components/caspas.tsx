import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import style from '@/assets/css/Style';

const Pros = [
  {id: 1, nome: 'Aspas' },
  {id: 2, nome: 'Saadhak'},
  {id: 3, nome: 'Less'},
  {id: 4, nome: 'Pancada'},
  {id: 5, nome: 'Sacy'},
  {id: 6, nome: 'jinggg'},
]



interface Pro  {
    id: number,
    nome: string
}
export default function Select(){
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [pro, setValuePro] = useState<Pro>();
    const [pro2, setValuePro2] = useState();

    
    useEffect(() => {
        if(pro)
            setValuePro2(pro)
    }, [pro])

    useEffect(() =>{
        setValuePro2(pro)
    })


    return (
        <View style={{flex:1}}>
          <Text style={[style.textBlack, style.textSizeM, style.bgTransparent5]}>Qual pro? {pro}</Text>
          <Dropdown
            selectedValue={selectedValue} setSelectedValue={setSelectedValue}
            style={[Styles.dropdown, Styles.selectContainer]}
            placeholderStyle={Styles.placeholderStyle}
            selectedTextStyle={Styles.selectedTextStyle}
            inputSearchStyle={Styles.inputSearchStyle}
            iconStyle={Styles.iconStyle}
            data={Pros || []} // Ensure estacoes is always an array
            search
            maxHeight={300}
            valueField="id"
            labelField="nome"
            placeholder="Selecione um pro"
            searchPlaceholder="Search..."
            value={pro}
            onChange={ function(item) {
              setValuePro(item.id); // Use item.id as per the valueField
    
            }}
            renderLeftIcon={() => (
              <AntDesign style={Styles.icon} color="white" name="Safety" size={20} />
            )}
            
          />
        </View>
    )
}


const Styles = StyleSheet.create({

    icon: {
      marginRight: 5,
      // color: 'white',
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    home: {
      marginTop: 0,
      padding: 10,
    },
    label: {
      fontSize: 18,
      marginBottom: 0,
      marginLeft:16,
      color: 'white',
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  
  
    selectContainer: {
      // width: 200,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 12, // For Android shadow
      shadowColor: '#000', // For iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.55,
      shadowRadius: 5.84,
  },
  
  picker: {
      height: 60,
      width: '100%',
  },
  
  dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
  },
  
  
  });