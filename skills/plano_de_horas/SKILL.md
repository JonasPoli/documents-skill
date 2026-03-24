---
name: Gerador de Orçamento Plano de Horas (CONTRATO DE EVOLUÇÃO)
description: Cria contratos de manutenção gigantes e detalhados a partir de breves inputs.
---

# Skill: Gerador de Orçamento Plano de Horas

**REGRA DE OURO:** IA deve gerar um documento enorme com SLAs e Matrizes de Risco. Consulte os exemplos reais em `/Volumes/Dados/work/documentos/modelos/extracao_automatica/plano de horas/` para capturar a linguagem de "Apólice de Segurança" e "Sustentação".

## 1. DESCOBERTA RÁPIDA
- "Volume de horas desejado e Plataforma atual?"

## 2. A EXPANSÃO DO CONTRATO DE SUSTENTAÇÃO
Use as estruturas obrigatórias do `MASTER_TEMPLATE.md`:
- **A. O Valor da Manutenção (Cenário Geral)**: Crie o argumento de que sistemas web deterioram com o tempo (novas versões do PHP, bugs de banco). O bloco deve persuadir.
- **B. Verticais de Atendimento**:
  - Segurança Básica: Verificação periódica de vulnerabilidades (CVEs).
  - Performance: Refatoração quinzenal de queries lentas (Slow Queries).
  - Suporte Operacional: SLA de resposta em 15 minutos via Ticketing P1.
- **C. Relatórios de Transparência**: Descreva as planilhas semanais de prestação de contas de horas consumidas e saldo.

## 3. GERAÇÃO
Seja muito eloquente e protetor no tom. Crie tabelas de SLA e de Preço.
Salve como `MEGA_CONTRATO_HORAS_[CLIENTE].md`.
