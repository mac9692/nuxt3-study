import {useNuxtApp, useState} from "#app";

export const useFoo = () => {
    return useState('foo', () => 'composables/practice-one.ts/useFoo');
}

export const nestedComposables = () => {
    const nuxtApp = useNuxtApp();
    const bar = useFoo();
}