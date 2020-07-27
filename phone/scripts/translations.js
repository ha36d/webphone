

var i18n = {
  "Username and Password fields are required.": {
    fr: "Les champs Nom d'utilisateur et Mot de passe sont obligatoires."
  },
  "SIP Settings": {
    fr: "Paramètres SIP"
  },
  "Username:": {
    fr: "Identifiant:"
  },
  "Password:": {
    fr: "Mot de passe:"
  },
  "Server:": {
    fr: "Serveur:"
  },
  "Close": {
    fr: "Fermer"
  },
  " Call": {
    fr: " Appel"
  },
  "Closing this window will cause calls to go to voicemail.": {
    fr: "Si vous fermez cette fenêtre, les appels seront dirigés vers la messagerie vocale."
  },
  "No recent calls from this browser.": {
    fr: "Pas d'appels récents."
  },
  "Sip registration failed. No calls can be handled.": {
    fr: "Échec de l'enregistrement. Impossible de recevoir des appels."
  },
  "Recent Calls": {
    fr: "Appels Récents"
  },
  "No recent calls from this browser.": {
    fr: "Aucun appels."
  },
  "Sip Error": {
    fr: "Erreur SIP"
  },
  "Sip registration failed. No calls can be handled.": {
    fr: "Échec de l'enregistrement. Impossible de prendre un appel."
  },
  "Hold": {
    fr: "Mettre en Attente"
  },
  "Mute": {
    fr: "Couper le son"
  },
  "Hangup": {
    fr: "Raccrocher"
  },
  "Ready": {
    fr: "Prêt"
  },
  "Connected": {
    fr: "Connecté"
  },
  "Disconnected": {
    fr: "Déconnecté"
  },
  "Connecting...": {
    fr: "Connection..."
  },
  "Calling...": {
    fr: "Appel en cours..."
  },
  "Incoming: ": {
    fr: "Appel Entrant: "
  },
  "Trying: ": {
    fr: "Essaie: "
  },
  "Rejected": {
    fr: "Rejeté"
  },
  "Terminated": {
    fr: "Terminé"
  },
  "Canceled": {
    fr: "Annulé"
  },
  "Answered": {
    fr: "Répondu"
  },
  "Muted": {
    fr: "Son coupé"
  },
  "Error: Registration Failed": {
    fr: "Erreur: Échec de l'enregistrement"
  },
  "Websocket Disconnected.": {
    fr: "Websocket déconnectée."
  },
  "An Error occurred connecting to the websocket.": {
    fr: "Une erreur est arrivée lors de la connexion de la websocket."
  },
  "Registration Error.": {
    fr: "Authentification invalide"
  },
  "An Error occurred registering your phone. Check your settings.": {
    fr: "Votre téléphone n'a pas pu s'enregistrer. Vérifiez vos identifiants."
  },
  "Unregistered.": {
    fr: "Non enregistré"
  },
  "An Error occurred registering your phone. Check your network connectivity.": {
    fr: "Votre téléphone n'a pas pu s'enregistrer. Vérifiez votre connectivité."
  },
  "This is your phone.": {
    fr: "Voici votre téléphone."
  },
  "If you close this window, you will not be able to receive calls in your browser.": {
    fr: "Si vous fermez cette fenêtre, vous ne pourrez plus recevoir d'appels dans votre navigateur."
  },
  "Unsupported Browser.": {
    fr: "Votre navigateur n'est pas supporté."
  },
  "Your browser does not support the features required for this phone.": {
    fr: "Votre navigateur ne supporte pas les fonctionnalités requise."
  },
  "WebRTC support not found": {
    fr: "Support WebRTC non trouvé"
  },
  "Media Error.": {
    fr: "Erreur Média."
  },
   "You must allow access to your microphone.  Check the address bar.": {
    fr: "Vous devez autoriser l'accès à votre microphone. Vérifier dans la barre d'adresse"
  },
  "Your browser need permission to play the Sound Please give the permission by closing this window.": {
   fr: "Votre navigateur a besoin de l'autorisation pour jouer le son. Merci de donner l'autorisation en fermant cette fenêtre."
 },
  "Sound": {
   fr: "Son"
  }
}

var translator = null;

$(document).ready(function() {
    var locale = window.navigator.userLanguage || window.navigator.language;
    translator = $('body').translate({lang: locale, t: i18n});
});
