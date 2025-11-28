<template><div><p>In de weergave <strong>Schema</strong> kunt u per datum een tijd een andere dosering in laten gaan. Hiermee kunt u bijvoorbeeld een op- of afbouwschema invoeren. Ook kunt u gebruik maken van extra opties zoals die in de weergave <strong>uitgebreid</strong>.</p>
<h2 id="invoeren-schema" tabindex="-1"><a class="header-anchor" href="#invoeren-schema"><span>Invoeren schema</span></a></h2>
<p>Bij het maken van een schema dient u per wijziging in de dosering een nieuwe regel toe te voegen. Hierdoor weet Medimo per wanneer de dosering moet worden aangepast. Om een schema in te voeren kunt u de volgende stappen gebruiken.</p>
<h3 id="start-per-opgeven" tabindex="-1"><a class="header-anchor" href="#start-per-opgeven"><span>Start per opgeven</span></a></h3>
<p>Links wordt de <strong>Start per</strong> getoond. Deze is vooringevuld en kunt u desgewenst aanpassen.</p>
<figure><img src="/uploads/weergave-schema-start-per-omlijnd.png" alt="Weergave schema - Start per omlijnd" tabindex="0" loading="lazy"><figcaption>Weergave schema - Start per omlijnd</figcaption></figure>
<h3 id="dosering-van-eerste-doseerregel-invoeren" tabindex="-1"><a class="header-anchor" href="#dosering-van-eerste-doseerregel-invoeren"><span>Dosering van eerste doseerregel invoeren</span></a></h3>
<p>Dit is de dosering van de eerste stap in het schema.</p>
<figure><img src="/uploads/weergave-schema-toedientijden-omlijnd.png" alt="Weergave schema - Dosering eerste regel omlijnd" tabindex="0" loading="lazy"><figcaption>Weergave schema - Dosering eerste regel omlijnd</figcaption></figure>
<h3 id="regel-toevoegen" tabindex="-1"><a class="header-anchor" href="#regel-toevoegen"><span>Regel toevoegen</span></a></h3>
<p>Onder de doseerregel wordt <strong>Regel toevoegen</strong> getoond. Hiermee voegt u een nieuwe regel toe. U kunt ook de tabtoets gebruiken om tussen de doseervakje te navigeren. Gebruikt u tab in het laatste doseervakje, dan voegt u daarmee een nieuwe doseerregel toe.</p>
<Tabs :data='[{"id":"Nieuwe regel toevoegen"},{"id":"Nieuwe regel toegevoegd"}]'>
<template #title0="{ value, isActive }">Nieuwe regel toevoegen</template>
<template #title1="{ value, isActive }">Nieuwe regel toegevoegd</template>
<template #tab0="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-regel-toevoegen-pijl.png" alt="Weergave schema - Nieuwe regel toevoegen" tabindex="0" loading="lazy"><figcaption>Weergave schema - Nieuwe regel toevoegen</figcaption></figure>
</template>
<template #tab1="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-nieuwe-regel-omlijnd.png" alt="Weergave schema - Nieuwe regel toegevoegd" tabindex="0" loading="lazy"><figcaption>Weergave schema - Nieuwe regel toegevoegd</figcaption></figure>
</template>
</Tabs>
<h3 id="wijzig-per-opgeven" tabindex="-1"><a class="header-anchor" href="#wijzig-per-opgeven"><span>Wijzig per opgeven</span></a></h3>
<p>Links in de nieuwe doseerregel wordt de <strong>wijzig per</strong> weergegeven. Dit is de datum en tijd van ingang van de nieuwe stap. Klik daarop om die aan te passen.</p>
<figure><img src="/uploads/weergave-schema-wijzig-per-omlijnd.png" alt="Weergave schema - Wijzig per omlijnd" tabindex="0" loading="lazy"><figcaption>Weergave schema - Wijzig per omlijnd</figcaption></figure>
<h3 id="dosering-invoeren" tabindex="-1"><a class="header-anchor" href="#dosering-invoeren"><span>Dosering invoeren</span></a></h3>
<p>Geef de dosering van de nieuwe stap op. Bestaat het schema uit meer stappen, voeg dan per stap een regel met een <strong>wijzig per</strong> en dosering toe.</p>
<Tabs :data='[{"id":"Dosering tweede stap"},{"id":"Volledig schema"}]'>
<template #title0="{ value, isActive }">Dosering tweede stap</template>
<template #title1="{ value, isActive }">Volledig schema</template>
<template #tab0="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-nieuwe-dosering-omlijnd.png" alt="Weergave schema - Dosering tweede stap omlijnd" tabindex="0" loading="lazy"><figcaption>Weergave schema - Dosering tweede stap omlijnd</figcaption></figure>
</template>
<template #tab1="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-compleet.png" alt="Weergave schema - Voorbeeld volledig schema" tabindex="0" loading="lazy"><figcaption>Weergave schema - Voorbeeld volledig schema</figcaption></figure>
</template>
</Tabs>
<p>Nadat u de dosering hebt opgegeven kunt u verder met het invoeren van de doseerinstructies, zoals het invoeren van Extra doseerinformatie en het opgeven van een Reden van voorschrijven.</p>
<p>Ook wordt Medicatiebewaking toegepast en dient u die mogelijk af te handelen.</p>
<h3 id="invoer-starten" tabindex="-1"><a class="header-anchor" href="#invoer-starten"><span>Invoer starten</span></a></h3>
<p>Nadat u het schema hebt ingevoerd, kunt u die starten. U krijgt deze dan als concept te zien in het overzicht <strong>medicatiebehandeling</strong>. Indien nodig kunt u hier het schema corrigeren.</p>
<figure><img src="/uploads/weergave-schema-concept-schema.png" alt="Overzicht medicatiebehandeling - Concept schema" tabindex="0" loading="lazy"><figcaption>Overzicht medicatiebehandeling - Concept schema</figcaption></figure>
<h3 id="invoer-opslaan" tabindex="-1"><a class="header-anchor" href="#invoer-opslaan"><span>Invoer opslaan</span></a></h3>
<p>Bent u akkoord met de invoer, dan kunt u die opslaan. Hiermee keert u terug naar de status waar het nieuwe schema wordt getoond.</p>
<h2 id="medicatiebewaking" tabindex="-1"><a class="header-anchor" href="#medicatiebewaking"><span>Medicatiebewaking</span></a></h2>
<p>Voor de medicatiebewaking geldt dat deze per doseerregel wordt uitgevoerd en dient te worden afgehandeld.</p>
<h2 id="invoeren-tijdelijk-schema" tabindex="-1"><a class="header-anchor" href="#invoeren-tijdelijk-schema"><span>Invoeren tijdelijk schema</span></a></h2>
<p>Met de stappen zoals hierboven beschreven voert u een continu schema in. U kunt ook een tijdelijk schema invoeren. Gebruik in dat geval <strong>Aanvullende stop</strong> in het overzicht <strong>medicatiebehandeling</strong>. U kunt dan de <strong>Stop per</strong> opgeven en daarna het schema inclusief de stop opslaan.</p>
<Tabs :data='[{"id":"Overzicht medicatiebehandeling"},{"id":"Opgeven stop per"}]'>
<template #title0="{ value, isActive }">Overzicht medicatiebehandeling</template>
<template #title1="{ value, isActive }">Opgeven stop per</template>
<template #tab0="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-concept-schema-aanvullende-stop-pijl.png" alt="Overzicht medicatiebehandeling - Pijl naar aanvullende stop" tabindex="0" loading="lazy"><figcaption>Overzicht medicatiebehandeling - Pijl naar aanvullende stop</figcaption></figure>
</template>
<template #tab1="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-aanvullende-stop-omlijnd.png" alt="Aanvullende stop - Stop per omlijnd" tabindex="0" loading="lazy"><figcaption>Aanvullende stop - Stop per omlijnd</figcaption></figure>
<p>@ tab Schema met stop</p>
<figure><img src="/uploads/weergave-schema-concept-schema-met-stop.png" alt="Overzicht medicatiebehandeling - Schema met stop" tabindex="0" loading="lazy"><figcaption>Overzicht medicatiebehandeling - Schema met stop</figcaption></figure>
</template>
</Tabs>
<h2 id="toedientijd-aanpassen-toevoegen" tabindex="-1"><a class="header-anchor" href="#toedientijd-aanpassen-toevoegen"><span>Toedientijd aanpassen/toevoegen</span></a></h2>
<p>Net als in de weergave <strong>uitgebreid</strong> kunt u afwijken van de standaard toedientijden. Klik daarvoor op de toedientijd die bovenaan het schema wordt getoond. Ook kunt u extra toedientijden toevoegen. Gebruik daarvoor het plusje dat onderin het schema wordt weergegeven. U kunt voor maximaal 6 verschillende toedientijden doseren.</p>
<Tabs :data='[{"id":"Toedientijd aanpassen"},{"id":"Toedientijd toevoegen"}]'>
<template #title0="{ value, isActive }">Toedientijd aanpassen</template>
<template #title1="{ value, isActive }">Toedientijd toevoegen</template>
<template #tab0="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-tijden-omlijnd.png" alt="Weergave schema - Toedientijden omlijnd" tabindex="0" loading="lazy"><figcaption>Weergave schema - Toedientijden omlijnd</figcaption></figure>
</template>
<template #tab1="{ value, isActive }">
<figure><img src="/uploads/weergave-schema-tijd-toevoegen-pijl.png" alt="Weergave schema - Toedientijd toevoegen" tabindex="0" loading="lazy"><figcaption>Weergave schema - Toedientijd toevoegen</figcaption></figure>
</template>
</Tabs>
<h2 id="extra-opties" tabindex="-1"><a class="header-anchor" href="#extra-opties"><span>Extra opties<a href="https://idyllic-liger-3a3f40.netlify.app/voorschrijven/dosering-aanpassen-schema.html#medicatiebewaking" target="_blank" rel="noopener noreferrer"></a></span></a></h2>
<p>In de weergave <strong>Schema</strong> kunt u gebruik maken van dezelfde opties als in de weergave Uitgebreid. Deze zijn:</p>
<ul>
<li>Aanpassen toedienroute.</li>
<li>Andere voorschrijver.</li>
<li>Extern geleverd.</li>
</ul>
</div></template>


