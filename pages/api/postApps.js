import dbConnect from "app/lib/mongodb";
import App from "models/apps";
export default async (req, res) => {
  await dbConnect();
  App.create({
    title: "RCP",
    shortDesc:
      "Aplikacja służy do rejestrowania czasu spędzonego w pracy. Zaimplementowane są tutaj trzy tryby: przerwa, praca w biurze  i na magazynie. Dane są dokładnie rejestrowane i pozwalają na rozliczanie pracowników z czasu pracy.",
    description: ` W aplikacji kierownicy zmian, muszą zaakceptować zaprezentowany czas pracy pracownika i w razie wątpliwości zkorygować go. Zebrane dane można wyeksportować do pliku csv/html, i przesłać bezpośrednio do księgowości `,
    mainTechnologies: ["php", "MySQL", "js", "JQuery"],
    otherTechnologies: [],
    links: {
      github: "asd",
    },
  });
  App.create({
    title: "Playerek",
    shortDesc:
      "Sklep internetowy, który umożliwia sprzedawanie wirtualnych kont (tutaj VOD) . Aplikacja sama realizuje zamówienia ze sklepu lub allegro przydzielając użytkowników do wolnych kont.",
    description: `<p> Do aplikacji zaimplementowana jest możliwość tworzenia kodów zniżkowych i sprzedaży po obniżonej cenie na dany okres. <br/> W sklepie istnieje również obsługa koszyka, który jest automatycznie synchronizowany po zalogowaniu na konto. <br/> Aplikacja posiada stałą integrację z serwisem Allegro - mamy możliwość pobierania istniejących aukcji, edytowania ich i w razie potrzeby wysłania ich do czystego, własnie założonego konta. Cała komunikacja klienta z bazą danych odbywa sie poprzez REST API <br/> Do automatycznych zadań takich jak realizacja zamówień czy wysyłka email zaimplementowany jest drugi server (express) z nadanymi zadaniami cron </p><i>Aplikacja nie jest jeszcze gotowa w 100%, jest w trakcie budowy</i> `,
    mainTechnologies: ["React", "NextJS", "MongoDB", "Bootstrap", "Context"],
    otherTechnologies: [
      "next-auth",
      "mongoose",
      "Formik",
      "axios",
      "expressJS",
      "react-table",
    ],
    links: {
      github: "https://github.com/brokieb/react_first",
    },
  });
  App.create({
    title: "Client Manager",
    shortDesc:
      "Progresywna aplikacja usprawniająca pracę agentom nieruchomości. Posiada możliwości zapisywania i łączenia klientów z nieruchomościami, planowania dnia wraz z synchronizacją go z zewnętrznym kalendarzem.",
    description: ` <p> Aplikacja w zamyśle miała usprawniać pracę mojej mamie, której pracę utrudniały pewne powtarzające się schematy w "pewnej" aplikacji: </p><ul> <li> Zbyt długi czas spędzany był na uzupełnianiu formularzy z danymi klientów czy ich nieruchomości poprzez zawiłe procedury dodawania/edycji pozycji </li><li> Aplikacja posiadała bardzo dużo opcji, które przez niektórych agentów były wykorzystywane, przez innych nie, tracone było bardzo dużo czasu na przeszukiwaniu dziesiątek podmenu </li><li> Brak możliwości pracy na aplikacji "z palca", podczas rozmowy telefonicznej z klientem. </li></ul> <p> Podsumowując problemy opisane wyżej utworzyłem aplikację która jest bardzo prosta w obsłudze, posiada tylko najbardziej potrzebne elementy - w jak największym stopniu uproszczone. Z bardzo dużą możliwościa modyfikacji wprowadzanych pól. ( po co agent który sprzedaje działki, ma musieć podawać dane które są dostępne tylko w budynkach) Aplikacja ogranicza się do dodawania klientów, niuruchomości, spotkań, edytowania i usuwania ich oraz inteligentnego łączenia ich w celu pokazania tylko tych elementów które szuka dany klient. Kolejnym waznym elementem była organizacja dnia, na dzień dzisiejszy istnieje możliwość oflagowania spotkań o różnej tematyce i informowanie na telefonie pracownika o zbliżających się spotkaniach </p><i> Aktualnie z aplikacji aktywnie korzystają dwa biura nieruchomości (ok. 15 osób) </i> `,
    mainTechnologies: ["php", "MySQL", "JQuery", "ajax"],
    otherTechnologies: ["SCSS", "google API", "Bootstrap"],
    links: {
      liveLink: "https://cmanager.pl",
      github: "https://github.com/brokieb/client-manager",
    },
  });
  res.status(200).json("OK");
};
