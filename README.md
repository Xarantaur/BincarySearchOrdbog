ikke 100 færdig. virker ikke korrekt.

i iterationerne gennem ordbogen springer den over den korrekte variant og finder aldrig tilbage til den.
snippet af console på JS:


Number of Entries: 666082 
script.js:30 (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
script.js:38 Hestevogn Entries Indexes: [225080]    <----------------------------------------------------------------------------------- det index vi leder efter.
script.js:42 [{…}]
script.js:66 {variant: 'litteraturteoriernes', headwood: 'litteraturteori', homograph: '', partofspeech: 'sb.', id: '11030631'}
script.js:67 Start: 0 End: 666081 Middle: 333040
script.js:68 Compare Value: -1
script.js:66 {variant: 'forsikrings', headwood: 'forsikring', homograph: '', partofspeech: 'sb.', id: '11015052'}
script.js:67 Start: 0 End: 333039 Middle: 166519
script.js:68 Compare Value: 1
script.js:66 {variant: 'indbetalingsdagens', headwood: 'indbetalingsdag', homograph: '', partofspeech: 'sb.', id: '53001426'}
script.js:67 Start: 166520 End: 333039 Middle: 249779
script.js:68 Compare Value: -1
script.js:66 {variant: 'g-strengene', headwood: 'g-streng', homograph: '', partofspeech: 'sb.', id: '11019040'}
script.js:67 Start: 166520 End: 249778 Middle: 208149
script.js:68 Compare Value: 1
script.js:66 {variant: 'hjulaksler', headwood: 'hjulaksel', homograph: '', partofspeech: 'sb.', id: '11021066'}
script.js:67 Start: 208150 End: 249778 Middle: 228964
script.js:68 Compare Value: -1
script.js:66 {variant: 'hasteindkaldelserne', headwood: 'hasteindkaldelse', homograph: '', partofspeech: 'sb.', id: '51000652'}
script.js:67 Start: 208150 End: 228963 Middle: 218556
script.js:68 Compare Value: 1
script.js:66 {variant: 'herlige', headwood: 'herlig', homograph: '', partofspeech: 'adj.', id: '11020521'}
script.js:67 Start: 218557 End: 228963 Middle: 223760
script.js:68 Compare Value: 1
script.js:66 {variant: 'histograms', headwood: 'histogram', homograph: '', partofspeech: 'sb.', id: '11020799'}
script.js:67 Start: 223761 End: 228963 Middle: 226362
script.js:68 Compare Value: -1
script.js:66 {variant: 'hestetrukken', headwood: 'hestetrukken', homograph: '', partofspeech: 'adj.', id: '53200184'}
script.js:67 Start: 223761 End: 226361 Middle: 225061
script.js:68 Compare Value: 1
script.js:66 {variant: 'hil', headwood: 'hil', homograph: '', partofspeech: 'udråbsord', id: '11020715'}
script.js:67 Start: 225062 End: 226361 Middle: 225711
script.js:68 Compare Value: -1
script.js:66 {variant: 'hh', headwood: 'hh', homograph: '', partofspeech: 'sb.', id: '11020673'}
script.js:67 Start: 225062 End: 225710 Middle: 225386
script.js:68 Compare Value: -1
script.js:66 {variant: 'hetzstemningers', headwood: 'hetzstemning', homograph: '', partofspeech: 'sb.', id: '53001174'}
script.js:67 Start: 225062 End: 225385 Middle: 225223
script.js:68 Compare Value: -1
script.js:66 {variant: 'heterogene', headwood: 'heterogen', homograph: '', partofspeech: 'adj.', id: '11020655'}
script.js:67 Start: 225062 End: 225222 Middle: 225142
script.js:68 Compare Value: -1
script.js:66 {variant: 'hestevæddeløbets', headwood: 'hestevæddeløb', homograph: '', partofspeech: 'sb.', id: '11020646'}
script.js:67 Start: 225062 End: 225141 Middle: 225101
script.js:68 Compare Value: -1
script.js:66 {variant: 'hestevogns', headwood: 'hestevogn', homograph: '', partofspeech: 'sb.', id: '11020645'}
script.js:67 Start: 225062 End: 225100 Middle: 225081     <--------------------------------------------------------------------------------  her rammer vi det næsten, men af en eller anden grund hopper searchen af sporet og fortsætter i en forkert retning.
script.js:68 Compare Value: -1
script.js:66 {variant: 'hestetyves', headwood: 'hestetyv', homograph: '', partofspeech: 'sb.', id: '53001170'}
script.js:67 Start: 225062 End: 225080 Middle: 225071
script.js:68 Compare Value: 1
script.js:66 {variant: 'hestevognenes', headwood: 'hestevogn', homograph: '', partofspeech: 'sb.', id: '11020645'}
script.js:67 Start: 225072 End: 225080 Middle: 225076
script.js:68 Compare Value: -1
script.js:66 {variant: 'hestetyvs', headwood: 'hestetyv', homograph: '', partofspeech: 'sb.', id: '53001170'}
script.js:67 Start: 225072 End: 225075 Middle: 225073
script.js:68 Compare Value: 1
script.js:66 {variant: 'hestevogne', headwood: 'hestevogn', homograph: '', partofspeech: 'sb.', id: '11020645'}
script.js:67 Start: 225074 End: 225075 Middle: 225074
script.js:68 Compare Value: -1
script.js:45 Could not find the value
