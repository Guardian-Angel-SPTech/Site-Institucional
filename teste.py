
import psutil

import os
from time import sleep
import pymysql
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# con = pymysql.connect(host='127.0.0.1',user='Leonardo Aguiar',database='db_MeusLivros',cursorclass=pymysql.cursors.DictCursor,password='123')

os.system('cls')
escolha = 0
while escolha != 5:
    os.system('cls')
    print('''Insira o número de acordo com o seu desejo: 
    [1] Memória RAM
    [2] Velocidade da CPU
    [3] Cores
    [4] Disco
    ''')
    escolha = float(input('Entrar: '))

    if escolha == 1:
        os.system('cls')
        # conversão memória virtual em GB
        # (bytes --> kb = total/1024)
        # (bytes --> mb = total/1024/1024)
        # (bytes --> gb = total/1024/1024/1024)

        # memória virtual

        def convert_gb(value):
            return f'{value /1024/1024/1024: .2f}GB' 

       
        # ramUt1 = ram * 0.20
       
        print("=-="*20)
        print("Memória RAM total na máquina:")
        # print(round(ram,1),"GB") #total
        print("Memória RAM sendo utilizada:")
        # print('{:.2f}'.format(ramU),'GB') #usando no momento
        print("=-="*20)


        def definirGraficoRAM(frame):
            ram = (psutil.virtual_memory().total)/1024/1024/1024
            ramU = (psutil.virtual_memory().used)/1024/1024/1024
            ramUt = ramU * 0.20
            ram2 = ramU + ramUt
            ramUt1 = ramU * 0.05
            ram3 = ramU + ramUt1

            valores.append(round(ramU, 2))
            valores.remove(valores[0])
            valores1.append(round(ram2, 2))
            valores1.remove(valores1[0])
            valores2.append(round(ram3, 2))
            valores2.remove(valores2[0])

            graficosRAM.cla()
            graficosRAM.plot(valores)
            graficosRAM.title.set_text(f'Maquina 1 - Memoria RAM - {valores[-1]}GB')
            graficosRAM.set_ylim(0, 100)

            graficosRAM1.cla()
            graficosRAM1.plot(valores1)
            graficosRAM1.title.set_text(f'Maquina 2 - Memoria RAM - {valores1[-1]}GB')
            graficosRAM1.set_ylim(0, 100)

            graficosRAM2.cla()
            graficosRAM2.plot(valores2)
            graficosRAM2.title.set_text(f'Maquina 3 - Memoria RAM - {valores2[-1]}GB')
            graficosRAM2.set_ylim(0, 100)

            conexao = pymysql.connect(db='GuardianAngel', user='root', passwd='2707')
            cursor = conexao.cursor()
            cursor.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro) VALUES (1, 1, '{:.2f}', NOW())".format(ramU))
            conexao.commit()
            conexao.close()

        valores = [0]*50
        valores1 = [0]*50
        valores2 = [0]*50

        janelaGeral = plt.figure(figsize=(3*3, 2*2), facecolor='#EEE')

        graficosRAM = plt.subplot(311)
        graficosRAM1 = plt.subplot(312)
        graficosRAM2 = plt.subplot(313)

        graficosRAM.axes.get_xaxis().set_visible(False)
        graficosRAM.set_facecolor('#DDD')

        graficosRAM1.axes.get_xaxis().set_visible(False)
        graficosRAM1.set_facecolor('#DDD')

        graficosRAM2.axes.get_xaxis().set_visible(False)
        graficosRAM2.set_facecolor('#DDD')

        animacaoGeral = FuncAnimation(janelaGeral, definirGraficoRAM, interval=500)

        plt.show()


        sleep(8)
        # memória virtual
        os.system('cls')
        print("Voltando ao menu...")
        sleep(2)

    elif escolha == 2:
        os.system('cls')
        

        print("=-="*20)
        #velocidade cpu
        print("Consumo de CPU: ")
        # print('{:.2f}'.format(freq),"%")
        
        #velocidade cpu
        print("=-="*20)

        def definirGraficoCPU(frame):
            freq = psutil.cpu_percent(interval=None)
            freqUt = freq * 0.05
            freq2 = freq + freqUt
            # freqUt1 = freq2 * 0.10
            freq3 = freq

            valores.append(round(freq,1))
            valores.remove(valores[0])
            valores1.append(round(freq2,1))
            valores1.remove(valores1[0])
            valores2.append(round(freq3,1))
            valores2.remove(valores2[0])

            graficosCPU.cla()
            graficosCPU.plot(valores)
            graficosCPU.title.set_text(f'Maquina 1 - Consumo CPU - {valores[-1]}%')
            graficosCPU.set_ylim(0, 100)

            graficosCPU1.cla()
            graficosCPU1.plot(valores1)
            graficosCPU1.title.set_text(f'Maquina 2 - Consumo CPU - {valores1[-1]}%')
            graficosCPU1.set_ylim(0, 100)

            graficosCPU2.cla()
            graficosCPU2.plot(valores2)
            graficosCPU2.title.set_text(f'Maquina 3 - Consumo CPU - {valores2[-1]}%')
            graficosCPU2.set_ylim(0, 100)

            conexao = pymysql.connect(db='GuardianAngel', user='root', passwd='2707')
            cursor = conexao.cursor()
            cursor.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro) VALUES (1, 2, '{:.2f}', NOW())".format(freq))
            conexao.commit()
            conexao.close()

        valores = [0]*50
        valores1 = [0]*50
        valores2 = [0]*50

        janelaGeral = plt.figure(figsize=(3*3, 2*2), facecolor='#EEE')

        graficosCPU = plt.subplot(311)
        graficosCPU1 = plt.subplot(312)
        graficosCPU2 = plt.subplot(313)

        graficosCPU.axes.get_xaxis().set_visible(False)
        graficosCPU.set_facecolor('#DDD')

        graficosCPU1.axes.get_xaxis().set_visible(False)
        graficosCPU1.set_facecolor('#DDD')

        graficosCPU2.axes.get_xaxis().set_visible(False)
        graficosCPU2.set_facecolor('#DDD')

        animacaoGeral = FuncAnimation(janelaGeral, definirGraficoCPU, interval=500)

        plt.show()

        
        sleep(8)
        os.system('cls')
        print("Voltando ao menu...")
        sleep(2)

    elif escolha == 3:
        os.system('cls')
        cores = psutil.cpu_count()
        cores_phy = psutil.cpu_count(logical=False)

        print("=-="*20)
        #qtd cores
        print("Quantidade de Cores lógicos: ")
        print(cores)

        print("Quantidade de Cores físicos:")
        print(cores_phy)
        #qtd cores
        print("=-="*20)

        conexao = pymysql.connect(db='dados', user='Aluno', passwd='sptech')
        cursor = conexao.cursor()
        cursor.execute("INSERT INTO registro (qtdCoreLgc, qtdCorePhy) VALUES ('{:.2f}', '{:.2f}')".format(cores, cores_phy))
        conexao.commit()
        conexao.close()

        sleep(8)
        os.system('cls')
        print("Voltando ao menu...")
        sleep(2)

    elif escolha == 4:
        os.system('cls')
        free_disk=(psutil.disk_usage('C:\\').free)/1024/1024/1024
        # percentage_disk=(psutil.disk_usage('C:\\').percent)
        print("=-="*20)

        print("Porcentagem de espaço sendo usado no disco: ")
        # print(round(percentage_disk,1),"%")
        print("=-="*20)

        def definirGraficoDisco(frame):
            percentage_disk=(psutil.disk_usage('C:\\').percent)
            percentage_diskUt = percentage_disk * 0.05
            percentage_diskUt1 = percentage_disk/3
            percentage_disk2 = (percentage_disk - percentage_diskUt) + percentage_diskUt1
            percentage_diskUt2 = percentage_disk * 0.07
            percentage_disk3 = percentage_disk + percentage_diskUt2
            valores.append(round(percentage_disk,1))
            valores.remove(valores[0])
            valores1.append(round(percentage_disk2,1))
            valores1.remove(valores1[0])
            valores2.append(round(percentage_disk3,1))
            valores2.remove(valores2[0])

            graficosDisco.cla()
            graficosDisco.plot(valores)
            graficosDisco.title.set_text(f'Quantidade ocupada no disco - {valores[-1]}%')
            graficosDisco.set_ylim(0, 100)
            
            graficosDisco1.cla()
            graficosDisco1.plot(valores1)
            graficosDisco1.title.set_text(f'Quantidade ocupada no disco - {valores1[-1]}%')
            graficosDisco1.set_ylim(0, 100)

            graficosDisco2.cla()
            graficosDisco2.plot(valores2)
            graficosDisco2.title.set_text(f'Quantidade ocupada no disco - {valores2[-1]}%')
            graficosDisco2.set_ylim(0, 100)

            conexao = pymysql.connect(db='GuardianAngel', user='root', passwd='2707')
            cursor = conexao.cursor()
            cursor.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro) VALUES (1, 3, '{:.2f}', NOW())".format(percentage_disk))
            conexao.commit()
            conexao.close()

        valores = [0]*50
        valores1 = [0]*50
        valores2 = [0]*50

        janelaGeral = plt.figure(figsize=(3*3, 2*2), facecolor='#EEE')

        graficosDisco = plt.subplot(311)
        graficosDisco1 = plt.subplot(312)
        graficosDisco2 = plt.subplot(313)

        graficosDisco.axes.get_xaxis().set_visible(False)
        graficosDisco.set_facecolor('#DDD')

        graficosDisco1.axes.get_xaxis().set_visible(False)
        graficosDisco1.set_facecolor('#DDD')

        graficosDisco2.axes.get_xaxis().set_visible(False)
        graficosDisco2.set_facecolor('#DDD')

        animacaoGeral = FuncAnimation(janelaGeral, definirGraficoDisco, interval=500)

        plt.show()

        sleep(8)
        os.system('cls')
        print("Voltando ao menu...")
        sleep(2)

    else:
        print("Insira um dos números a cima!")
        sleep (1.5)