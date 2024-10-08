import { Question } from "../types/Question";
import { Category } from "../types/Category";

export const questions: Question[] = [
  // Wirtschaft und Finanzen
  {
    id: "1",
    text: "Sollte die deutsche Bundesregierung progressiv höhere Steuersätze für Spitzenverdiener einführen, um die wachsende soziale Ungleichheit im Land zu verringern und mehr Mittel für öffentliche Dienstleistungen bereitzustellen?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: -2,
    secondAxis: "liberal", // Mögliche Interpretation: Umverteilung vs. wirtschaftliche Freiheit
  },
  {
    id: "2",
    text: "Sollte die deutsche Regierung eine Vermögenssteuer für Reiche einführen, um den Staatshaushalt zu konsolidieren und Investitionen in Infrastruktur zu fördern?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: -2,
    secondAxis: "liberal", // Mögliche Interpretation: Umverteilung zur Förderung öffentlicher Projekte
  },
  {
    id: "3",
    text: "Sollte die Bundesregierung die Unternehmenssteuern senken, um den Wirtschaftsstandort Deutschland attraktiver für internationale Unternehmen zu machen?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: +2,
    secondAxis: "konservativ", // Mögliche Interpretation: Marktfreiheit vs. staatliche Intervention
  },
  {
    id: "4",
    text: "Sollte Deutschland einen Mindestlohn von 15 Euro pro Stunde einführen, um die Einkommenssicherheit für Arbeitnehmer zu erhöhen?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: -1,
    secondAxis: "liberal", // Mögliche Interpretation: Arbeitnehmerschutz vs. wirtschaftliche Flexibilität
  },
  {
    id: "5",
    text: "Sollte die deutsche Regierung weiterhin auf die Schuldenbremse bestehen, auch wenn dies bedeutet, dass dringend benötigte Investitionen in Klimaschutz und soziale Gerechtigkeit nicht finanziert werden können?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: +2,
    secondAxis: "konservativ", // Mögliche Interpretation: Haushaltsdisziplin vs. Investitionen
  },
  {
    id: "6",
    text: "Sollten Großkonzerne wie Volkswagen und Siemens verpflichtet werden, höhere Steuern in Deutschland zu zahlen, um den Steuerwettbewerb zu begrenzen und die Finanzlage des Staates zu verbessern?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: -1,
    secondAxis: "liberal", // Mögliche Interpretation: Gerechtigkeit im Steuersystem vs. Unternehmensfreiheit
  },
  {
    id: "7",
    text: "Sollte Deutschland eine stärkere Privatisierung öffentlicher Dienstleistungen wie Bahn und Post anstreben, um Effizienzgewinne zu erzielen?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: +2,
    secondAxis: "konservativ", // Mögliche Interpretation: Markteffizienz vs. öffentliche Kontrolle
  },
  {
    id: "8",
    text: "Sollte der deutsche Staat verstärkt in den sozialen Wohnungsbau investieren, um die steigenden Mieten in Ballungsräumen zu bekämpfen?",
    category: Category.Wirtschaft,
    axis: "kapitalistisch",
    direction: -1,
    secondAxis: "liberal", // Mögliche Interpretation: Soziale Verantwortung vs. Marktkräfte
  },
  {
    id: "9",
    text: "Sollte die Bundesregierung die Gründung von Start-ups durch steuerliche Anreize fördern, um Innovationen zu unterstützen, auch wenn dies bedeutet, dass etablierte Unternehmen weniger Unterstützung erhalten?",
    category: Category.Wirtschaft,
    axis: "konservativ",
    direction: -1, // Liberal: Förderung von Innovation und Unternehmertum
    secondAxis: "sozialistisch", // Mögliche Interpretation: Unterstützung neuer Unternehmen vs. bestehende Unternehmen
  },
  {
    id: "10",
    text: "Sollte die Regierung gesetzliche Quoten für die Förderung von Frauen in Führungspositionen in der Wirtschaft abschaffen, um der unternehmerischen Freiheit mehr Raum zu geben?",
    category: Category.Wirtschaft,
    axis: "konservativ",
    direction: +1, // Konservativ: Gegen Quotensysteme, für unternehmerische Freiheit
    secondAxis: "kapitalistisch", // Mögliche Interpretation: Unternehmerische Freiheit vs. Geschlechtergerechtigkeit
  },

  // Umwelt und Klimapolitik
  {
    id: "11",
    text: "Ist der globale Klimawandel die größte Herausforderung unserer Zeit, die sofortiges und entschiedenes Handeln auf internationaler Ebene erfordert, auch wenn dies kurzfristig wirtschaftliche Nachteile mit sich bringen könnte?",
    category: Category.Umwelt,
    axis: "konservativ",
    direction: -2,
    secondAxis: "kapitalistisch", // Mögliche Interpretation: Wirtschaftliche Nachteile durch Umweltschutz
  },
  {
    id: "12",
    text: "Sollte die deutsche Bundesregierung höhere CO2-Steuern für Unternehmen einführen, um Emissionen zu reduzieren und gleichzeitig die Einnahmen für den Ausbau erneuerbarer Energien zu nutzen?",
    category: Category.Umwelt,
    axis: "kapitalistisch",
    direction: -2, // Sozialistisch: Höhere Besteuerung und Umverteilung für Umweltschutz
    secondAxis: "liberal", // Mögliche Interpretation: Staatliche Interventionen vs. wirtschaftliche Freiheit
  },
  {
    id: "13",
    text: "Sollte Deutschland strengere Handelsbeschränkungen für Länder verhängen, die sich nicht an internationale Klimaschutzabkommen halten, um globalen Druck auf den Klimaschutz auszuüben?",
    category: Category.Umwelt,
    axis: "kapitalistisch",
    direction: -1, // Sozialistisch: Staatliche Kontrolle durch internationale Klimaschutzmaßnahmen
    secondAxis: "liberal", // Mögliche Interpretation: Liberal da Klimaschutz Prio hat
  },
  {
    id: "14",
    text: "Sollte die Regierung die Vorschriften für den Bau neuer Windkraftanlagen lockern, um den Ausbau erneuerbarer Energien zu beschleunigen, auch wenn Anwohner dagegen protestieren?",
    category: Category.Umwelt,
    axis: "konservativ",
    direction: -1, // Liberal: Weniger Regulierung für den Ausbau erneuerbarer Energien
  },
  {
    id: "15",
    text: "Sollte der Staat die Freiheit der Unternehmen achten und keine Vorgaben zur Reduzierung des CO2-Ausstoßes machen, um die Marktfreiheit nicht zu beeinträchtigen?",
    category: Category.Umwelt,
    axis: "konservativ",
    direction: +2, // Konservativ: Marktliberalismus und weniger staatliche Eingriffe
    secondAxis: "sozialistisch", // Mögliche Interpretation: Marktfreiheit vs. staatliche Regulierungen
  },
  {
    id: "16",
    text: "Sollte der Staat Subventionen für fossile Energieträger streichen und stattdessen alle Fördergelder in nachhaltige Technologien wie Wind- und Solarenergie umleiten?",
    category: Category.Umwelt,
    axis: "kapitalistisch",
    direction: -2, // Sozialistisch: Abschaffung von Subventionen für fossile Energien zugunsten erneuerbarer Energien
    secondAxis: "liberal", // Mögliche Interpretation: Staatliche Interventionen zur Förderung erneuerbarer Energien
  },
  {
    id: "17",
    text: "Sollte die Bundesregierung den Einsatz von Pestiziden und Düngemitteln in der Landwirtschaft strenger regulieren, um Umweltschutz und Nachhaltigkeit zu fördern, auch wenn dies die landwirtschaftliche Produktivität beeinträchtigen könnte?",
    category: Category.Umwelt,
    axis: "konservativ",
    direction: -1, // Liberal: Umweltschutz und Nachhaltigkeit priorisieren
    secondAxis: "kapitalistisch", // Mögliche Interpretation: Umweltschutz vs. wirtschaftliche Produktivität
  },
  {
    id: "18",
    text: "Sollten Unternehmen, die besonders umweltbelastende Produkte herstellen, eine Sondersteuer zahlen, um die Kosten für die Entsorgung und Umweltschäden auszugleichen?",
    category: Category.Umwelt,
    axis: "kapitalistisch",
    direction: -1, // Sozialistisch: Umweltbelastende Unternehmen stärker besteuern
    secondAxis: "liberal", // Mögliche Interpretation: Verantwortung der Unternehmen vs. staatliche Regulierung
  },
  {
    id: "19",
    text: "Sollte Deutschland internationale Klimaverhandlungen unterstützen, auch wenn das bedeutet, nationale Souveränität bei der Festlegung eigener Klimaziele einzuschränken?",
    category: Category.Umwelt,
    axis: "konservativ",
    direction: -1, // Liberal: Unterstützung internationaler Kooperation für Klimaschutz
    secondAxis: "sozialistisch", // Mögliche Interpretation: Internationale Kooperation vs. nationale Interessen
  },
  {
    id: "20",
    text: "Sollte der Staat den Verkauf von Verbrennungsmotoren ab einem bestimmten Jahr komplett verbieten, um die Verbreitung von Elektroautos zu fördern?",
    category: Category.Umwelt,
    axis: "konservativ",
    direction: -2, // Liberal: Strenge staatliche Vorschriften für Klimaschutz
    secondAxis: "kapitalistisch", // Mögliche Interpretation: Strikte Regulierung vs. wirtschaftliche Freiheiten
  },
  {
    id: "21",
    text: "Sollte Deutschland den Individualverkehr stärker reglementieren, z.B. durch City-Maut-Systeme, um den öffentlichen Nahverkehr zu stärken und die Umweltbelastung zu reduzieren?",
    category: Category.Umwelt,
    axis: "konservativ",
    direction: -1, // Liberal: Für stärkere staatliche Eingriffe zur Umweltregulierung
    secondAxis: "kapitalistisch", // Mögliche Interpretation: Staatliche Regulierungen vs. individuelle Freiheit
  },

  // Sozial- und Gesundheitspolitik

  {
    id: "21",
    text: "Sollte die Bundesregierung den Zugang zu psychologischer Beratung und Therapie für alle Bürgerinnen und Bürger erweitern, um die psychische Gesundheit zu fördern und Stigmatisierung abzubauen?",
    category: Category.Sozial,
    axis: "konservativ",
    direction: -2,
    secondAxis: "kapitalistisch",
  },
  {
    id: "22",
    text: "Sollte der Staat die Ausgaben für die gesetzliche Krankenversicherung reduzieren, um den Bürgern die Wahl zwischen privater und gesetzlicher Versicherung zu ermöglichen?",
    category: Category.Sozial,
    axis: "kapitalistisch",
    direction: +2,
    secondAxis: "liberal",
  },
  {
    id: "23",
    text: "Sollte die Bundesregierung den Ausbau von öffentlichen Gesundheitseinrichtungen vorantreiben, um sicherzustellen, dass alle Bürger Zugang zu notwendigen Gesundheitsdiensten haben?",
    category: Category.Sozial,
    axis: "konservativ",
    direction: -2,
    secondAxis: "kapitalistisch",
  },
  {
    id: "24",
    text: "Sollte die Regierung steuerliche Anreize für private Gesundheitsversicherungen schaffen, um mehr Menschen zu ermutigen, sich privat zu versichern?",
    category: Category.Sozial,
    axis: "kapitalistisch",
    direction: +1,
    secondAxis: "liberal",
  },
  {
    id: "25",
    text: "Sollte die Bundesregierung ein Recht auf kostenlose medizinische Versorgung für alle Bürger garantieren, um soziale Gerechtigkeit im Gesundheitswesen zu fördern?",
    category: Category.Sozial,
    axis: "konservativ",
    direction: -2,
    secondAxis: "kapitalistisch",
  },
  {
    id: "26",
    text: "Sollte der Staat die privatwirtschaftliche Gesundheitsversorgung ausbauen, um den Wettbewerb zu fördern und den Bürgern mehr Wahlmöglichkeiten zu bieten?",
    category: Category.Sozial,
    axis: "kapitalistisch",
    direction: +2,
    secondAxis: "liberal",
  },
  {
    id: "27",
    text: "Sollte die Bundesregierung die Leistungen der gesetzlichen Krankenversicherung erhöhen, um die Versorgung von sozial benachteiligten Gruppen zu verbessern?",
    category: Category.Sozial,
    axis: "konservativ",
    direction: -2,
    secondAxis: "kapitalistisch",
  },
  {
    id: "28",
    text: "Sollte der Staat die Abgaben auf private Gesundheitsdienste senken, um die Inanspruchnahme dieser Dienste zu erhöhen?",
    category: Category.Sozial,
    axis: "kapitalistisch",
    direction: +1,
    secondAxis: "liberal",
  },
  {
    id: "29",
    text: "Sollte die Bundesregierung eine Mindestsicherung im Gesundheitswesen einführen, um sicherzustellen, dass niemand aufgrund finanzieller Schwierigkeiten auf medizinische Versorgung verzichten muss?",
    category: Category.Sozial,
    axis: "konservativ",
    direction: -2,
    secondAxis: "kapitalistisch",
  },
  {
    id: "30",
    text: "Sollte die Regierung Unternehmen Anreize bieten, um in betriebliche Gesundheitsvorsorge zu investieren und so die Belastung des staatlichen Gesundheitssystems zu reduzieren?",
    category: Category.Sozial,
    axis: "kapitalistisch",
    direction: +1,
    secondAxis: "liberal",
  },

  // Außen- und Sicherheitspolitik

  {
    id: "31",
    text: "Sollte die Bundesregierung die NATO-Truppenpräsenz in Osteuropa verstärken, um die Sicherheit gegenüber möglichen aggressiven Handlungen Russlands zu gewährleisten und den Mitgliedstaaten Rückhalt zu bieten?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: -2, // Liberal: Stärkung der kollektiven Sicherheit und internationalen Zusammenarbeit
  },
  {
    id: "32",
    text: "Sollte Deutschland seine Rüstungsexporte in Krisengebiete restriktiver handhaben, um die humanitäre Situation zu verbessern und internationale Menschenrechtsstandards zu wahren?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: -1, // Liberal: Fokus auf Menschenrechte und Humanität
    secondAxis: "kapitalistisch", // Optional: Wirtschaftliche Nachteile für Firmen
  },
  {
    id: "33",
    text: "Sollte die Bundesregierung die Bundeswehr stärker in internationale Friedensmissionen einbinden, um die Stabilität in Krisenregionen zu fördern und humanitäre Hilfe zu leisten?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: -1, // Liberal: Unterstützung für internationale Zusammenarbeit und Friedenssicherung
  },
  {
    id: "34",
    text: "Sollte Deutschland aktiv gegen die globale Erwärmung vorgehen, auch wenn dies bedeutet, eigene wirtschaftliche Interessen im internationalen Wettbewerb zu schmälern?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: -1, // Liberal: Fokus auf Klimaschutz und globale Verantwortung
    secondAxis: "sozialistisch", // Optional: Mögliche Interpretation: Umweltbewusstsein vs. wirtschaftliche Interessen
  },
  {
    id: "35",
    text: "Sollte Deutschland einen größeren Beitrag zur internationalen Entwicklungshilfe leisten, um die Lebensbedingungen in ärmeren Ländern zu verbessern und zur globalen Stabilität beizutragen?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: -1, // Liberal: Förderung von sozialer Gerechtigkeit und globaler Zusammenarbeit
    secondAxis: "sozialistisch", // Gegen Marktwirftschaft dafür Sozial
  },
  {
    id: "36",
    text: "Sollte die Bundesregierung den militärischen Verteidigungshaushalt erheblich erhöhen, um die eigenen Streitkräfte zu modernisieren und sich auf mögliche zukünftige Konflikte besser vorzubereiten?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: +2, // Konservativ: Stärkung der nationalen Verteidigung
  },
  {
    id: "37",
    text: "Sollte Deutschland eine verstärkte militärische Zusammenarbeit mit den USA anstreben, um die transatlantische Sicherheitspartnerschaft zu festigen und gemeinsam gegen globale Bedrohungen vorzugehen?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: +2, // Konservativ: Stärkung der transatlantischen Beziehungen
    secondAxis: "sozialistisch", // Optional: Mögliche Interpretation: Verteidigungsallianzen vs. nationale Autonomie
  }, //CHECK
  {
    id: "38",
    text: "Sollte die Bundesregierung die Erhöhung der Verteidigungsausgaben auf 2 % des BIP einhalten, um die NATO-Vorgaben zu erfüllen und die militärische Einsatzfähigkeit Deutschlands zu garantieren?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: +1, // Konservativ: Pflichtbewusstsein gegenüber NATO-Verpflichtungen
    secondAxis: "sozialistisch", // Optional: Sicherheit vs. andere Haushaltsprioritäten
  },
  {
    id: "39",
    text: "Sollte Deutschland den Einsatz von Drohnen im Ausland ausweiten, um präzise militärische Operationen durchzuführen, auch wenn dies ethische Bedenken aufwirft?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: +1, // Konservativ: Fokus auf Effektivität und militärische Stärke
    secondAxis: "kapitalistisch", // Optional: Ethik vs. militärische Effizienz
  },
  {
    id: "40",
    text: "Sollte Deutschland das Asylrecht für Menschen, die aus Kriegsgebieten fliehen, konsequent verteidigen, um humanitäre Hilfe zu leisten und die internationalen Verpflichtungen einzuhalten?",
    category: Category.AussenSicherheitspolitik,
    axis: "konservativ",
    direction: -2, // Liberal: Fokus auf Menschenrechte und internationale Verantwortung
  },

  // Bildung und Forschung
  {
    id: "41",
    text: "Sollte die Bundesregierung die Studiengebühren an öffentlichen Universitäten abschaffen, um den Zugang zu höherer Bildung für alle Bürger zu gewährleisten und soziale Ungleichheiten abzubauen?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: -2, // Liberal: Förderung des Zugangs zur Bildung und Chancengleichheit
    secondAxis: "sozialistisch", // Optional: Finanzierung vs. soziale Gerechtigkeit
  },
  {
    id: "42",
    text: "Sollte der Bund mehr finanzielle Mittel für Schulen bereitstellen, um digitale Lehrmittel einzuführen und den digitalen Unterricht in allen Bundesländern zu verbessern?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: -1, // Liberal: Förderung von Digitalisierung und modernen Lehrmethoden
    secondAxis: "sozialistisch", // Optional: Bildungsausgaben vs. Haushaltsdisziplin
  },
  {
    id: "43",
    text: "Sollte die Bundesregierung eine Bildungsreform einführen, die den Lehrplan an den Bedarf der digitalen Wirtschaft anpasst, um Schüler besser auf die Herausforderungen der Arbeitswelt vorzubereiten?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: -1, // Liberal: Anpassung der Bildung an die moderne Arbeitswelt
    secondAxis: "sozialistisch", // Optional: Innovation vs. traditionelle Bildung
  },
  {
    id: "44",
    text: "Sollte die Politik eine verstärkte Zusammenarbeit zwischen Universitäten und Unternehmen fördern, um praxisnahe Ausbildung und Forschung zu ermöglichen und Fachkräfte zu sichern?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: -1, // Liberal: Förderung von Kooperation und Innovation
    secondAxis: "sozialistisch", // Optional: Praxisnähe vs. akademische Freiheit
  },
  {
    id: "45",
    text: "Sollte der Bund die Möglichkeit von Stipendien für Studierende in sozialen Berufen ausweiten, um die Attraktivität dieser Berufsfelder zu erhöhen und dem Fachkräftemangel entgegenzuwirken?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: -2, // Liberal: Soziale Gerechtigkeit und Förderung wichtiger Berufsfelder
    secondAxis: "sozialistisch", // Optional: Stipendien vs. Marktmechanismen
  },
  {
    id: "46",
    text: "Sollte die Bundesregierung die Investitionen in Forschung und Entwicklung erhöhen, um die Innovationskraft Deutschlands zu stärken und die Wettbewerbsfähigkeit auf dem globalen Markt zu sichern?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: +2, // Konservativ: Stärkung der Wirtschaft durch Forschung
    secondAxis: "kapitalistisch", // Optional: Forschung vs. andere Staatsausgaben
  },
  {
    id: "47",
    text: "Sollte die Politik eine stärkere Förderung für private Bildungseinrichtungen schaffen, um den Wettbewerb im Bildungssektor zu erhöhen und den Eltern mehr Wahlmöglichkeiten zu bieten?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: +1, // Konservativ: Förderung des Wettbewerbs und der Wahlfreiheit
    secondAxis: "kapitalistisch", // Optional: Wettbewerb vs. Chancengleichheit
  },
  {
    id: "48",
    text: "Sollte die Bundesregierung ein verpflichtendes Jahr für gesellschaftlichen Dienst nach der Schule einführen, um den sozialen Zusammenhalt zu fördern und junge Menschen zu engagieren?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: +1, // Konservativ: Soziale Verantwortung und Engagement
    secondAxis: "sozialistisch", // Optional: Pflicht vs. persönliche Freiheit
  },
  {
    id: "49",
    text: "Sollte die Politik eine gezielte Förderung von MINT-Fächern (Mathematik, Informatik, Naturwissenschaften, Technik) in Schulen einführen, um dem Fachkräftemangel in diesen Bereichen entgegenzuwirken?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: +1, // Konservativ: Förderung von Schlüsselkompetenzen für die Wirtschaft
    secondAxis: "sozialistisch", // Optional: Bildungspolitik vs. Fachkräftesicherung
  },
  {
    id: "50",
    text: "Sollte die Bundesregierung die Aus- und Weiterbildung von Lehrkräften verstärkt unterstützen, um die Qualität des Unterrichts zu verbessern und den Herausforderungen der modernen Bildungslandschaft gerecht zu werden?",
    category: Category.Bildung,
    axis: "konservativ",
    direction: +2, // Konservativ: Stärkung der Bildungsqualität durch gut ausgebildete Lehrkräfte
    secondAxis: "sozialistisch", // Optional: Investitionen in die Zukunft vs. aktuelle Herausforderungen
  },
  // Digitalisierung und Technologie

  {
    id: "51",
    text: "Sollte die Bundesregierung eine umfassende Digitalisierungsstrategie entwickeln, um den digitalen Wandel in der Verwaltung voranzutreiben und bürokratische Hürden für Bürger und Unternehmen abzubauen?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: -2, // Liberal: Förderung von Transparenz und Bürgerfreundlichkeit
    secondAxis: "sozialistisch", // Optional: Digitalisierung vs. Datenschutz
  },
  {
    id: "52",
    text: "Sollte die Politik finanzielle Mittel bereitstellen, um die digitale Infrastruktur in ländlichen Regionen auszubauen und allen Bürgern gleichwertigen Zugang zum Internet zu ermöglichen?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: -1, // Liberal: Chancengleichheit und Zugang zur digitalen Welt
    secondAxis: "sozialistisch", // Optional: Infrastrukturinvestitionen vs. Haushaltsdisziplin
  },
  {
    id: "53",
    text: "Sollte die Bundesregierung die Forschung und Entwicklung in den Bereichen Künstliche Intelligenz und Datenanalyse aktiv fördern, um Deutschlands Rolle als Technologieführer zu stärken?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: -1, // Liberal: Förderung von Innovation und Wettbewerbsfähigkeit
    secondAxis: "sozialistisch", // Optional: Forschung vs. ethische Bedenken
  },
  {
    id: "54",
    text: "Sollte der Bund Unternehmen Anreize bieten, um in digitale Weiterbildung für ihre Mitarbeiter zu investieren, um die Wettbewerbsfähigkeit und Innovationskraft der deutschen Wirtschaft zu sichern?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: -1, // Liberal: Förderung von lebenslangem Lernen und Anpassung an digitale Veränderungen
    secondAxis: "sozialistisch", // Optional: Unternehmensanreize vs. individuelle Verantwortung
  },
  {
    id: "55",
    text: "Sollte die Bundesregierung ein staatliches Programm zur Unterstützung von Start-ups im Bereich Digitalisierung einführen, um Innovationen und technologischen Fortschritt zu fördern?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: -2, // Liberal: Unterstützung von Jungunternehmen und Innovation
    secondAxis: "sozialistisch", // Optional: Staatsintervention vs. Marktmechanismen
  },
  {
    id: "56",
    text: "Sollte die Politik gesetzliche Regelungen für die Nutzung von Künstlicher Intelligenz einführen, um den Datenschutz der Bürger zu gewährleisten und Missbrauch zu verhindern?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: +2, // Konservativ: Schutz der Privatsphäre und ethische Standards
    secondAxis: "sozialistisch", // Optional: Regulierungen vs. Innovationshemmung
  },
  {
    id: "57",
    text: "Sollte die Bundesregierung die Einführung eines digitalen Personalausweises vorantreiben, um den Zugang zu Online-Diensten zu erleichtern und bürokratische Abläufe zu optimieren?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: +1, // Konservativ: Modernisierung der Verwaltung und Erleichterung für Bürger
    secondAxis: "sozialistisch", // Optional: Datenschutz vs. Nutzerfreundlichkeit
  },
  {
    id: "58",
    text: "Sollte die Bundesregierung die Entwicklung von digitalen Plattformen fördern, um den Austausch von Daten zwischen Behörden und Unternehmen zu erleichtern und die Effizienz zu steigern?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: +1, // Konservativ: Effizienzsteigerung durch Digitalisierung
    secondAxis: "sozialistisch", // Optional: Datenzugang vs. Sicherheitsbedenken
  },
  {
    id: "59",
    text: "Sollte die Politik eine stärkere Regulierung von großen Tech-Unternehmen einführen, um monopolartige Strukturen zu verhindern und den Wettbewerb auf dem digitalen Markt zu sichern?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: +1, // Konservativ: Schutz des Wettbewerbs und der Verbraucher
    secondAxis: "sozialistisch", // Optional: Regulierung vs. Marktkräfte
  },
  {
    id: "60",
    text: "Sollte die Bundesregierung Investitionen in Cyber-Sicherheit priorisieren, um kritische Infrastrukturen zu schützen und das Vertrauen der Bürger in digitale Dienste zu stärken?",
    category: Category.Digitalisierung,
    axis: "konservativ",
    direction: +2, // Konservativ: Sicherheit und Schutz der digitalen Infrastruktur
    secondAxis: "sozialistisch", // Optional: Sicherheitsausgaben vs. andere Investitionen
  },
];
