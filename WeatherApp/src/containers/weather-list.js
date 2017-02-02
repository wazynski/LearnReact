import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidities = cityData.list.map(weather => weather.main.pressure)
    const pressures = cityData.list.map(weather => weather.main.humidity)

    return(
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="red" units="K"/></td>
        <td><Chart data={pressures} color="orange" units="HPA"/></td>
        <td><Chart data={humidities} color="blue" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table tabel-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (K)</th>
            <th>Presure (HPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps( {weather} ) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
