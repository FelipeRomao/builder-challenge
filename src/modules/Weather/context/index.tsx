import { useEffect, useState, ReactNode, createContext } from "react";
import { toast } from "react-toastify";

import fetchWeatherData from "shared/services/weather";

interface WeatherContextData {
  results: any;
  loader: boolean;
  onError: any;
  onGetWeatherSuccess: any;
}

interface WeatherProviderProps {
  children: ReactNode;
}

const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [loader, setLoader] = useState(true);
  const [results, setResults] = useState({});

  async function onGetWeatherSuccess(params: any) {
    const { coords } = params;
    const { latitude, longitude } = coords;

    setLoader(true);
    const data = await fetchWeatherData({ lat: latitude, lon: longitude });

    if (data) {
      toast("Dados atualizados com sucesso", { type: "success" });
      setResults(data);
      setLoader(false);
    }
    return data;
  }

  function onError() {
    toast("Não foi possível atualizar os dados", { type: "error" });
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      onGetWeatherSuccess,
      onError
    );
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        loader,
        results,
        onError,
        onGetWeatherSuccess,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
