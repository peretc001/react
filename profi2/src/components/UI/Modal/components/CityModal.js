import React, {useEffect, useState} from 'react';
import Modal from "@/UI/Modal/Modal";

import {setCurrentLocation} from "@/store/actions";
import {useStore} from "@/hooks/useStore";
import {useActions} from "@/hooks/useActions";

import {useDebouncedEffect} from "@/hooks/useDebouncedEffect";
import {APIGetTopCities, APISearchCities} from "@/api/city";

import styles from './CityModal.module.scss'

const CityModal = (props) => {
  const [topCities, setTopCities] = useState([])
  const [search, setSearch] = useState('')
  const [cities, setCities] = useState([])

  const {location} = useStore(state => state.locationReducer)
  const {setCurrentLocation} = useActions()

  const onSelectCity = (city) => {
    setCurrentLocation(city)
    props.closeModal()
  }

  useEffect(async () => {
    const topCities = await APIGetTopCities()
    setTopCities(topCities || [])
  }, [])

  // Отправка на апи с задержкой
  useDebouncedEffect(async () => {
    const searchCities = await APISearchCities(search)
    setCities(searchCities || [])
  }, [search], 300)

  return (
    <Modal {...props}>
      <div className={styles.cityModal}>
        <p className={styles.current}>
          Ваш город: <b>{location.name}</b>
        </p>

        <input
          className={styles.search}
          type="text"
          value={search}
          placeholder="Поиск города"
          onChange={(e) => setSearch(e.target.value)}/>

        {cities.map(item => (
          <p key={item}>{item}</p>
        ))}

        <ul className={styles.cities}>
          {topCities.map(city => (
            <li key={city.id}>
              <span onClick={() => onSelectCity(city)}>{city.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default CityModal;
