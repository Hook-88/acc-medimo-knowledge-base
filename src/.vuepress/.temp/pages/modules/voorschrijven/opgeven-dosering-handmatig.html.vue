<template><div><p>U kunt ook per dag een dosering opgeven. Dit gebruikt u bijvoorbeeld om de dosering van trombosemedicatie handmatig in te voeren.</p>
<p><strong>Let op!</strong> Wordt er gebruik gemaakt van een <strong>Trombosedienst koppeling</strong>, dan wordt de dosering vanuit daar overgenomen in Medimo. Betreffende medicatie dient in dat geval op een specifieke wijze te worden ingevoerd. Voer de dosering in dat geval NIET handmatig in.</p>
<h2 id="handmatig-invoeren-dosering" tabindex="-1"><a class="header-anchor" href="#handmatig-invoeren-dosering"><span>Handmatig invoeren dosering</span></a></h2>
<p>In de weergave handmatig geeft u per dag (en tijd) een dosering op. Elke regel stelt een dag voor.</p>
<figure><img src="/uploads/dosering-handmatig-nieuw.png" alt="Dosering handmatig" tabindex="0" loading="lazy"><figcaption>Dosering handmatig</figcaption></figure>
<p>Volg de onderstaande stappen om de dosering handmatig in te voeren:</p>
<h3 id="start-per-opgeven" tabindex="-1"><a class="header-anchor" href="#start-per-opgeven"><span>Start per opgeven</span></a></h3>
<p>Links wordt de startdatum getoond. Controleer deze en pas zo nodig aan via <strong>Start per</strong> voordat u de dosering invoert.</p>
<h3 id="dosering-eerste-dag-invoeren" tabindex="-1"><a class="header-anchor" href="#dosering-eerste-dag-invoeren"><span>Dosering eerste dag invoeren</span></a></h3>
<p>Voer de dosering voor de gewenste toedientijd in. Indien nodig kunt de toedientijden aanpassen en/of uitbreiden(max. 6).</p>
<p>Klik op de toedientijd om deze aan te passen. Gebruik het plusje dat rechts wordt weergegeven om een toedientijd toe te voegen.</p>
<h3 id="nieuwe-regel-toevoegen" tabindex="-1"><a class="header-anchor" href="#nieuwe-regel-toevoegen"><span>Nieuwe regel toevoegen</span></a></h3>
<p>Met <strong>Regel toevoegen</strong> voegt u een nieuw regel toe. Ook kunt u met de <strong>tabtoets</strong> naar het volgende toedientijdvakje gaan. Gebruikt u de tabtoets in vakje van de laatste toedientijd, dan wordt automatisch een nieuwe regel toegevoegd.</p>
<p>Bij het toevoegen van een nieuwe regel wordt de dosering van de voorgaande regel gekopieërd.</p>
<Tabs :data='[{"id":"Nieuwe regel toevoegen"},{"id":"Nieuwe regel toegevoegd"}]'>
<template #title0="{ value, isActive }">Nieuwe regel toevoegen</template>
<template #title1="{ value, isActive }">Nieuwe regel toegevoegd</template>
<template #tab0="{ value, isActive }">
<figure><img src="/uploads/dosering-handmatig-pijl-nieuwe-regel.png" alt="Dosering handmatig - Pijl naar Nieuwe regel toevoegen" tabindex="0" loading="lazy"><figcaption>Dosering handmatig - Pijl naar Nieuwe regel toevoegen</figcaption></figure>
</template>
<template #tab1="{ value, isActive }">
<figure><img src="/uploads/dosering-handmatig-nieuwe-regel-toegevoegd.png" alt="Dosering handmatig - Nieuwe regel toegevoegd" tabindex="0" loading="lazy"><figcaption>Dosering handmatig - Nieuwe regel toegevoegd</figcaption></figure>
</template>
</Tabs>
<p>Pas indien nodig de dosering van de nieuwe regel aan en voeg een nieuwe toe. U kunt voor maximaal 31 dagen een dosering invoeren.</p>
<p>Nadat u de dosering hebt opgegeven, kunt u de medicatie op de gebruikelijke wijze starten. Indien gewenst kunt u gebruik maken van de voorschrijfopties:</p>
<ul>
<li><strong>Andere voorschrijver</strong></li>
<li><strong>Extern geleverd</strong></li>
<li><strong>Continu schema</strong></li>
</ul>
<h2 id="continu-schema" tabindex="-1"><a class="header-anchor" href="#continu-schema"><span>Continu schema</span></a></h2>
<p>Als u handmatig een dosering invoert, dan stopt het schema na de laatste doseerregel. Wilt u de medicatie zonder stop invoeren? Vink dan de optie <strong>Continu schema</strong> aan. Hiermee vervalt de stop. Voor de dagen na de laatste doseerregel gebruikt Medimo een X als dosering.</p>
<h3 id="historie-handmatig-schema" tabindex="-1"><a class="header-anchor" href="#historie-handmatig-schema"><span>Historie handmatig schema</span></a></h3>
<p>Wijzigt u een continu schema, bijvoorbeeld om de nieuwe dosseeraantallen op te geven, dan kunt u de historie van het voorgaande schema te raadplegen. Gebruik daarvoor <strong>Historie handmatig schema</strong>. Hiermee opent u de historie in een pop-up.</p>
<figure><img src="/uploads/dosering-handmatig-historie-schema.png" alt="Dosering handmatig - Pijl naar Historie handmatig schema" tabindex="0" loading="lazy"><figcaption>Dosering handmatig - Pijl naar Historie handmatig schema</figcaption></figure>
</div></template>


