import React from 'react'
import { Input, MessageChat } from '@/ui'
import * as S from './styles'

const Chat: React.FC = () => {
  const url =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHBwcHBwaHBwaHB0cHBwcHBocGhoeIS4lHB4rIRgcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND80NP/AABEIAQ8AugMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADwQAAEDAgQDBgQFAwMEAwAAAAEAAhEDIQQFEjFBUWEGInGBkaEysdHwE1JiweFCcvEVI4IUM5KyFiSi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAIhEAAwEAAgMAAgMBAAAAAAAAAAECESExAxJBE1EiYXEy/9oADAMBAAIRAxEAPwDIry8vJzDy9K4VEoAlqXCVZRwznAkEW8z/AOIv5pnlmRufD6006Q3uA5wG+nkP1LKpTywUt9CltzHEopmW1iC4Un6QYLtDtM7bx7r6NgshpsjVg6T2TLajHlx0/wBBeDG4g2tZRzjtDXpP0mk80yO7pOlzRF2mT3hIMHkl9+B/QxVHsvii8tNFzY3LjpaZ2h+x8kyw3Yyo43DQBvLxHlEuPt4p0O1tLZ73/wDJrhHQX58lbTzPBPaWmo89TraR4OAB91N+Svg68a+ldHsSwC4cejWsBP8A5l37Iw9l6DRfAPfzh7J8xqAnwU8PUwwBu39LnPc+Y/v4+CofmrCYFRrORdTDh6tcbeiVVTN9EC4nJsE27sNiGNO/xd0/27u/4yl7+ytGsNWFxDT+l5I47SRY+PJN8ZnWLoN1gU6zPzUy5zT4gElnjcIPD9osLibV6X4VSfjB0kHafxGwY8bJlVC+qMxiuz+JpzqpPkb6Wlw8nNkFL3sc2zgR4ghfTGuq0XBzajqrIsHNBeB0c2z29I8xwYa8NiWQ9rQHiNbTpubGfyu8eRunVsVyfIwVMFfRMR2CwxbDKjw7mS0+oIE+AIWPz3IamGeA+HNcSGOB+KAJtuDfYp1SYrWC5hXZVQ+/vyUgVphMFdlcBXgUGokuqMr2pBoAF4rkrqBSMqeHpue4Na0ucdgLyeG3BSo4Z7yA0EzbkPVaLKKRY/8ADoFjXNI/GqvkhtpcGCO+BadvolVnXZszoflGT08P/uVDpeIlgBfGuwtBJB5e/JjmRwT2PZWe8y253iwh7R+URdvCbhZ3N+0j2Th3EEscAXbh7Wnuune9iNiCOqyuOzGX/E5hN2vBnhbU0/EOG9kma9fJTeODU5nmxZ/t06j34cRo0uJeyGwHMIMvaRMtIg24hJsN2mxNEgNriozdv4g1DwIPymR7JI7FzZ4hw/rZafEbSqiSDfvA8efXoUxhrcZ2ipVmy/Dsk/G2SL82uHsSJSLECmT/ALLnN/Q7ceDv6h6Hohw3u6m95psQdweThv5rwpB9m+h3/wCJ4+CXENpOjjntPH79j5hM6GZNdZw0nmDHtsR9wloY5ohwJHPb/BRJwgI1MM9Of398kYg1mgwWKe0yx5aTfo7xGzh92UcdTFXvBoY+Nm2a/np69PmlODqFg1XcwHvNO7DzHRH4l3dD23abxt6cnBZmG6U5dnVag/RrdpmWgzA/tHBw4gbjktRhse2s0uaA2r/W3g/xAsZ31C9uayuKYKzR3u9GoOAgmOJ/UOPMIfCYtzCHRBYdLgOR399vJa1qBG5wmeuYdBJg2a53OfgcfkUa/OWVGmnVbraZ8bWLXcQ9s7jcX5hYytiBVY4u+IWd1HB3iJv5qDsU+ASe+2GuPOPgf42ieoSoGkF5xkr2EFgL6US1zR535mCLhKGNJ2257BaTAVHVmBtyGbCwDJOonoJnYoHM8JoMsBfqkag3usPEAdeoFlSa+CVOcitpUgVTKmCqCFi9KjK7KDQCVJcCupsk/wCUCkxiDSYXCQ93dBAksbxLR+Y7DqQl1TtETQFJjA0Rc7PB/uFzfibmbruZOfUJDAXNpm1wBP5u8fNJcTUc95c+NdtRAAkjiQLTzU+3o/8AR51VxMlxJAid7DgeYVlJ4O9xy+7qlrUwwWDc7w6AXQ2alpUGidoHU/WFM4d4uyHN5AyP4Ke4Ps25zZIjpA/ZWHIjSeCCdMgmOIB2S+yG9GZ+gD8TZBFnD6/VH0aUkGJnhz6dD0RdagNbqjbOFyODgdx4QETSaxrgRdps5trHcT05FGhh5tUNALrtNr8Omr9iuFzQZb8JsehRZY0h2m4gy3i4D4h4iyU/9MQSWd5h35gH6FYbgW5gY4OJkbO6tPPr98VPBPh76ZFoJF/6hF/MEFD0yXAsdyt48EXSpRUa8/kI6cWo0MBKbdD3MGwIeOV5kex9VCuIef1Bs+X+EZiGjVI4j6/UITFOABPGAFuhgPRxBY4O9uiLcQXCDYiB4bj76pWZJTGnTMN+9kMB9keM0Pi+nTpjieZ9YutS4sqt0FjzqFzYAbQdfCPksZgAW96WzMyd54BG4vMngfETA5xytyA9UpuAWc5fofLRLHfC8EuaTy1E7pY0pmztcDFKo2aUwWkR4u23B8NlXmGXFjpadTHXYdyR163VZr4ybQGCuqErshOKDNRFB+mSdgCfQbqgBUZrU00TB7zzpA6C7j6W80PoVdijEY3UIEFm2nj4mRued1WynO3uL+aqpiOUojDNLnAKY4dgMrLiCtjlOTtYJNzzQWVUQ2OJ4n6dFpaG1+S5/Jb6OrxQnyX0aQGwXqtAOBEKVN/FWMcuf2Oj10VvykO4QdvWxSrFdmXi7eUfwQte1XtbzVJtiV40fOXYepSLXOBOk2PlEFGYAhwc4iLE+R3sttVwbHggiyUf6RoLmN2IMev0un92ybhJ8Gdo4Qzqj7+7onEUTFt4jw/n6p4MtLSbXEAI3D5cN3nyHBY7N9DLNwBiSN9kO/KgXcTy+pJW6fQZGyGfhm7Jfym/hMezKP8AP0TGngIER5p+WAcAqnsAW/k038eCDF4dzWiHATtZKajHBp1RM3BA25g8QtTjmCCCLLNZkIET+6rFaRucENSuNV2safzEEx4ggrSZPU/FpupvjUJLHBwIM/l5CbR16LKYkXkWHLdFZRiNBDxeHBo5AQSQOZ2P+VXCQ0qagYJNuagjMwbLi8cYJ8Tv5IGVRPgRlYQGdsnSZs0DyLpcfZo9kexJO0D+/pB4CfSyKEQDrm/35pzk+GLiI80kpCStNlVTYCw91OnwUhax/h2BrgAU9Y60pFTbsQOPinGGMhcds7vGuApp/hX0h1Q4CJotUS2BVJoV7WqqmOiKpsMKki0TpsUjQFjA/wAqxrSu3HBWRFvSD6A3CqDEWHW2VT6Z5rKlGy87A3MQtdqPqUxxlCVWiI2UaRaWBPeo6uCm9nVQclRrBMTt81l82pkeHRafEngkub0ZEq/jrDn8s8GPrQDdce4kDSIaOXA8zffqp4kXIQrRyXUjkZqqb9dNjuhafb6FUSo5a6aPOHEcOIn5q3T1Tz0LXYMxZvNXTWeevsAAFo2rNZm6az/7votYqK6e60eVNuFnKJuFpskZN+qlfRXx9mqpMhgRWGNwFHDskQu0BBhcVHfIxYOPBXMcPRUMcptfCkUwNovHOEdRqDmg8O7giWtVYbJ0gxrxzXXH1VbWDkpGmOCtrJYibSIUHuHMLgYB4rkX2EIegkiirUHNDVSEVVKFqGZUaKyBvIVThZWVFUXbqY4DX+IIDMW2PuEwc2/mgc0HdkKs9kr6MXmTbyEsdO43+aa4894oD8Ob2A4k7BdknFSGuSAua8CeBHnKY6HfZH1S/J3g6miYAsbDiDMeqL1fpCdE2UMMLOZrS/3nnnB9R9ZWowTGue0PdobxPHy6nZDdusHSpupmnqBc0hwcdW3EHry6LapbgTLa9jN4dt1tMkod2+/JZDKqep4W6wDCI6KHk6LeFcjiiSIHRXNZdVM5rrcS0XcQPEwuXDt3BgxuyubSS9mYN5i3Iz+yOoYtpA34LPQ32DKDEWyfFUUXA8UYwAJ5kR0WNjY+66FwEKIddUEJFVlhA3U5XXBY+TQZ4k3VFVqLe1C1ngKdSOqAH073VNUK6piW7SJ5Sgzi5sWxwmfql9WN7aRaNyg8bTnyCN1CdPCULiTHlZahXyYrOqcElJXvt5+q0mftg7TKzVaoJjSuyOjj8nDGeTQdR6Ae8plbmfvzQ2W0opNuL32PlcBEQ3n7D6q09EK7KsMNTgw7OtHiClfaWs4lrX/EzuzzaNjPMSQmGHqaXtPJwPuju02FY/XESdMHxEhTvikW8a2GjLZOe+0dVusLZYfKqcPHMFbyk3ugqVjeJYC5zmmhsDfyskFHMKj3dwajy/m/qrc0okv72023+5R2TaAYO44xB8iFiSSHbp0RZRxLxDG6CepvPIlC1KOKpT+Ix5E7yfWxuttQxzGjvERzJEK2r2jwoGl9VngSD7LFX9DOP7MThe0L2AgPf0DpkHlPFa3Iu1DngNeJ67EdD9f8pNmONwDyQx7dXgfnCDovbTcHAS3g5plDe/MCU190+nMxIdEGQVZrvZZnJ8zD4AI/daBgkKTK8BH4mypxOL0hcqP0grLZzm7AYJ8uMoTZjRXm/aR8nT8I2PM8/BZmrnFV5u9/g23vKLqVtd3EMYOLrJhlmJwQI1VGF3IkfJUTz5pNrfonpMrmDT1nqQD8wfZWvxGIp/HDp4X4+XyW4Zi6UdxzSOkQl+YOa8HZZ7ab6Z0zMYbPII3HNpvHgSnv4oeNQ2Ky+PwbZ7sfXxTbJnmNPLc/wtqV2jJp7jAs9Fp5LHVJJ84stj2kbDVl8uoF9RrRtMnx2VYf8SNrawd4SWsY07ged9grJ6KeJADiBwt6W8lUrz0Qr/oEJWlp4DXhmPF3cRz+4WZctV2axoLDS4xqA8yD99Unl60r4O8f0yNOnprkbSVscA4FoHkkOdN01AYgg3OyaZbUuBzUK5Wl54poef6Yx7YIjjI3SPMMpeHRTAHWDIWpwzoRL6WrgueaaZZymYDCdmX1HTUeQ0HbiR628k0xPYunq7jbECIOlzXDkfeU8rUXtNmHyIU2YqqD/wBp59PqrT5cErxKlgDl3Zim1xNRuskOJLna3Oc7cuJ81SezHfhgIY48Dt1I48OqeufWfuwM8SPkEVh6DmC7ysq9YTClYjJNyJ+Hqgh0iRMbFbfB3aEsxbZN0bl9Syl7aying9m9mOI5FYTC9nKj5qOI4m9z5BbXMnyC3mq8C4iADFoTKuTHPBnMq7NMe7VWJjgDv9APdLMw7OaRpa1mlx0vc6nqI0u1aqb47pIEdQVuK+sGRcdBdQdmAAg6geM+6tHkU9kr8XtyjHUex4/Dc9mppnucJgb+EpYxmIpuLHhx85t0X0B+L/KB99EMzBazqdM/fssryJmz4/VYZvB5YX3M/JMaWX6LRv6LQUsOGoTMDAlS9m2P6pGP7TGyAyCgGuDzHEn0KLzgF7tIROKwQpYeZuY91eekv2Ra5dfoUl5JJndcnoFW0qUrqOMqcEblAl8B2lwuw/q5dQeSDcuYeppe120Eeiylqw2XlJjrNWF9Evd3XtdfzMFUZTV7zecJtmzAaLyLiAVncM4tqM6lcy5lnW+KR9Awr5hNMMkGArbJ1QfsuY6Q78MFRdSPNWsKk8JmhUUtEbmVCo4q4NQWKqQYbukY6SKazt5V+ACAqh0wU3y6nKJl6a39A8duo0Gq3MhuhcPVMTwQ0AzpOnfdSc2dwD5KFAAiQUS1q1aI0gM4Vv5R6KxmHaESQqaroCMAHr7QkOPqd0zw+acYmrZZjN6sMcZWyuTKeISUO/VceUX8zKsz3FhzQwGYiT15eSqyhpLngWkQhc0gP0NMho9+PmuuJ1/4ct01LX7BmqWpQapq5zEHKBCmouQAybmv+wWOsYgH5IZ+zHcnBBlE4d+pkHcFRuVPKLxbrhmnwlSw6p/hanVZvDjuAptl9WQuSjtlmip1VaKiAouVpJOyXRsROtXOzUqxNbRUh1pbPvdNqTIuRdI+0mAdVDSx2h7djwjiChLWH+FzsU3UDKe5fimN3uvkmMynEscHCsS7eJMW3sbInBdqHs7lRpDhubweo5KyjOUSdrqj6LmNUc0GyoA2JWDxWdV6xinAHM3ROXtxp3787GwjxSuH2MrTfBvMtr2ttMJq14KWZTQ0U2tNzxPMndFgwprgdoKlCYl6k56ExD0NmJAOMrQD5rKZ3WkBo4kJzj611m8Zd45AEqkL6T8jO5a8NeXSAACT+yUufqJceJJXHvJJvZdauyJzk4breCQU1FdjonEIlcJXCuEoAiSo4Z0Oc3ncfuuuKqc+CHdUtLUbDxmxyh2pkI2lLT4FJ+z2JF2zs723Wi0cVw2sZ6MP+IVQqo6i9LqIuBzQ2a4xzPh2nTHPiprljN4hpj8zFMbSdrXuk+LzRjoguBv1j9t7LP4nMmue5jyRvc2jba+2+3RFYOvhy2C4k8Q3jefL+FX1wRVvQa/S9pJvaAeIILmz7KpmQfignT8MX5pph8dSYJbTHi4gyEywudUgIgN/tNpTLTfQzlHLRSlrhHl8vZFUsya1waIiIttI3/ZMsXiadVwJkAcr/fFKsRhGQNDmmCTBMWI2jxWPfoerRoKGLaRvEIrXIWKFfQ4X3gb8tvNN8BnGp2geh+/NI5N9x0+sBuluMrwF7GVgWhwQWJBKRDaAPkyVn8fVjUZ6LS41wYzy/ZY3HVJIb1kro8S05/NWIqpmd1a1VtVoK7DiOrq5K9H3CAKiVyVWXJjg8nrVLhulp/qf3R5A3PkECgBKnh8G6pIbtxcfhHiefRaBuS0Wf9x7nu/K3uN8zufZAZxmIa3QyA0bNaIaPvmt9f2boBlWK0VIPgfEH79VvMHWBFui+W6i3S8/1EnyBgfIrZZDmILRJuuTyz9R2eG/jNTSfcGeP+FVmeGbqBJtvAuZNpUGPG8wrBimkmZMGLXkW48NlzpF2yGByXDlri9jXkkjvCbearrdl8N/SzT0DnDrwP3KYUXETA7o2ngpvfsZ3uUyto1ShZR7P0NiwjYWc4DrxTJ/Y3DkS1zmTwaTbluVNuLYRciym3MGtk6j+3oqTX7Qzr9MXV+yTGGfx3tBJsHXkeSU43Imus2tUJnjpPntZaOpX13c42vdVOINm7cSh1+ka2muTOUuxpcI/Ge70A+V17/oKlGCXAkHTPGAd1r6Lw1u21j9eqU4lrXmIhwMmbgx+8Kbpsk0ib7tYOZE+t1Ks2XKFarqI5C8KjFYkBpJSYboq7RYsARzKyzqbjLy0hpsDFrdVZmuN1vJ8h9VzDVqgP8A9d5NrsJB8dIO46b+K7fFOI4/NWsi1SBVrcxpvOmtT0O4uZ3TP6mGx9Fe/LiW66bhUZ+n4h4s39JViIKCvT1UJUtSANG1+HoWYwa/zO77/KdvIIfF5od5M9Zt6pY6uRsIHEi3vuUE9xJlNouFuIx7+e6V4moSiK6ErMkFK2Bfi6RAYD+RojqRqP8A7LmV41zHAG4lexr++D/b8gPkFzHYUi4UmW+8G5wGNDmh3DxV9PEsLtzM2DfvqsFlWOLDpn3j1PJPsBjW64B8IupOC0+TUbelUbLRMW2KOFIOE2Aj2CzLMSWvYBBPOeJ+iJwmPLXO7xJk35/2g81L0Lqi7E4MieA+4np0SH8WqxxN3B1/W0futPhqrn/FGiTYHd3M9NrKdOg0lvK5J4TPHwMIWo1pMRYKhWfIAMdeBAF0+wOEc0AO3dv7lFRp47k2i03jwMBV4nMQCAbT3gfmDy/lY9YJJIHxTgB7OaeuxHmk+HcC896bC/Gx4+4XcwxDg5x2MwLyA4XHhf5pfUqhr+Rv5i029kyknVcjBz9XMAeWyR9ocxgaQfRcx2bhrYB7xWcqOc92pypMZyydX8QNXLrE7GYPgURgpBVD7hp6u/aEdhmxddM8I5q7HdWi2swax3xs7j4HmPFKaYqUX2JBCPw9SFZiu8J4jiN4TGBDKlLEDvjS/wDO2x8+B817/wCPu/Oz/wDX0SmkGi4LvZEf6o7mfZAAz3yqlFxXgsAi8KiqyyJIVdZtkAV4ikXCR+UFOqdDWxp5hD5XUeWhrA0y2DqLokEiO7cmPmmWVMIaWuF2mCPcKVdFoSbMtjsKWOmFVhq8R3iDPpzJWtx+BBCy2NwZaSsVaZU4x5leO1NiYMiTx0/fJNcO8OJkm2/hvHsPVYejiSw2tw9d02wePBsXGIMzxPJDnQVtG+y7EgNaSePd+duZuEwbXZoPKTHhusRhcwJc4HYGAeUmBPr7JpRzSABabyPCWj5KVSzonyIePx4IdM7gHoOfjKT4zFanXNwXAHfkQD6kIStjDpO1iSeHGY90sxGLidJmBf2IM8lsyLXkXwYYrMA2dexEee4IPjx6rO4nMXXAJG1idxzCGxeOL5AJI4DYTM/UeaGY2TZUSSIumy+C8zcojEt0tDRu7fw/lGZfg4Elcwmp9Vzms1xYXAAA6lC7BrELnsgN8/miaQV2cfG0aS0wZFuZ4jfxVVEKqJV2EMdCvpVDKpaFZstApxTNJPW6Ck/ZR2JOpu1x9lBeSACGtm6rcIXmuXSgCTVXXaptUKzrIAGw2JLWwCdzMGJ/hOcixRNTSZ7w4nks634immBa5pDwQNMETzkW90lrUPDfsjXvZIgiyTZhhOY809Y7U0H78ENiKZvZc6eHW51GGxWGg2QYtstRjsHeyS4jCkcwqpnPU4UMxLtuH0V7ccbTJAEeX2PmhdJUyEwuBFTHvLY24nqRYffVUOe47n75eC4SpMpklAYcZTJMBPMswHQlQy7B80/w7NIt/KSqwpMg+JAYwnkPseKVYCu5kwSCb2THHguhoBN9h6+iExFB0ayN5n1NufFNBnk3tfAHHVy94cbnT4Tc8FNiEpmXn0RrVU52TapyqwV2Vppw7qH4TVNe1dfksAGXW3XAF2EAdlVVL2UnOUQgAfDMmo0czCFrumr3iS0O5f0g8G+HBFVH6XNfEwQY5gG49Fbj8O0PlvwkvA9iB6H2WM1dGnwOKbsAQ03m+kzsWHkYmOBkJkbjZYXBVXNDi091vdc07Q4xI66gD5BazLMXrYDflfmue5zk6/Fe8EsRQtZK8ThU/cyRKArM3SqsHqUzO1MLdUOwpTypT5KsUZKp7EvUTMwkpjhcIjqWHRLAGpXRqklQpQEQXWQv4pJLRw8kJmVUspuIN5DZ5T/hYlr5GbxFeJxM1A1hiOI52+X7JTgabjrruc6G6nbnvfxceoVuGaNLnTENMeJFvmvY2uGYenTA7zpk8mg7ebvl1XRmHK6b5YJhnyZ5mUwCAwwR4TCEpXJK9K8CgDsLsr0qOlAH/9k='
  return (
    <S.Background>
      <MessageChat message={'Ola'} author="seu_zé" imageUrl={url} />
      <Input
        type="text"
        tooltip="Lugar aonde se insere uma mensagem de texto"
        placeholder="Digite sua mensagem"
        radius="30px"
      />
    </S.Background>
  )
}

export default Chat
