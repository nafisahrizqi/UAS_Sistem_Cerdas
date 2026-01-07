#!/usr/bin/env python3
"""
Sistem Pakar Diagnosa Kerusakan HP - Versi CLI (Python)
Jalankan: python diagnosis.py
"""

import json
import os
import textwrap

RULES_PATH = os.path.join(os.path.dirname(_file_), 'rules.json')


def load_rules(path=RULES_PATH):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)['rules']


def match_rule(symptoms, rule):
    # semua kondisi 'if' pada rule harus ada di input symptoms
    return all(cond in symptoms for cond in rule['if'])


def diagnose(symptoms, rules):
    matched = []
    for r in rules:
        if match_rule(symptoms, r):
            matched.append(r)
    return matched


def format_diagnosis(matched_rules):
    if not matched_rules:
        return "Tidak dapat menentukan diagnosa — gejala tidak cukup cocok."

    lines = []
    for r in matched_rules:
        lines.append(f"Rule ID {r['id']}: {r['then']}")
        if 'solution' in r:
            lines.append("  Saran: " + r['solution'])
    return "\n".join(lines)


def interactive():
    rules = load_rules()
    print("\n=== SISTEM DIAGNOSA KERUSAKAN HP (CLI) ===\n")
    print("Masukkan gejala yang dialami (pisahkan dengan koma).\nContoh: hp tidak menyala, layar gelap\n")

    user_input = input("Gejala: ")
    symptoms = [s.strip().lower() for s in user_input.split(',') if s.strip()]

    matched = diagnose(symptoms, rules)

    print("\n=== HASIL DIAGNOSA ===\n")
    print(format_diagnosis(matched))
    print('\nTerima kasih.')


if _name_ == '_main_':
    interactive()