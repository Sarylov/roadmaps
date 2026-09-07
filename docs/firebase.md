---
title: Firebase
summary: Client Firebase config for Auth + Firestore (public web keys; security is Rules + Auth).
---

Project: roadmaps-4f77c  
Auth: Google  
Authorized domain: sarylov.github.io  

## Firestore rules (paste in Console → Firestore → Rules)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Document shape

`users/{uid}`:

```json
{
  "articles": {
    "js/types": { "note": "...", "tag": "remembered", "updatedAt": 123 }
  },
  "updatedAt": 123
}
```
