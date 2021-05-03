---
path: "/ssh-keygen"
title: SSH Keygen
date: "2021-04-14"
excerpt: "A guide on generating SSH Keys"
author: "Nicholas O'Kelley"
tags: ["Linux", "SSH", "Security"]
---

## SSH Keygen

Here are my notes on ssh keygen as I tend to forget the exact process in between
keygen times.

## How SSH keypairs work

SSH keys can be used as login creditials on various platforms from Github and Gitlab to the
remote server at work. They work in pairs: a public and private key. The private key must remain
on the local computer which acts as the client and is used to DECRYPT information.

**WARNING**: Do not share the private key.

The public key can be shared as it is used to encrypt data. It is usually copied to the remote server
to `~/.ssh/authorized_keys` in the $HOME directory of the suer we wish to login as on the server.

## Key Type and Bit Size

ssh-keygen by default will utilize the _rsa_ key pair which has a size of 3072 bits. If we pass the
`-t` flag then we can choose a different key type. Some options are:

- dsa
- ecdsa
- ecdsa-sk
- ed25519
- ed25519-sk
- rsa (As already mentioned)

Every tpe has a default bit size, DSA keys are 1024 bits while according to the manual ECDSA keys
`-b` determines the key length by selecting from one of the elliptic curve sizes: 256, 384, 521.

## Example Keygen

An RSA key of 4096 bits would be accomplished by the following:

```
$ ssh-keygen -b 4096
```

## Loading the Key onto a server

Now we have our keys, time to put it onto the server. Example of copying `id_rsa.pub` to a remote server.

```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub <user>@<host>
```
