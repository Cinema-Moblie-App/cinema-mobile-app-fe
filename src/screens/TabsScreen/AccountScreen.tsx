import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const AccountScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
      {/* Ticket Section */}
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>💳  Vé đã mua</Text>
      </TouchableOpacity>

      {/* Account Section */}
      <View style={styles.sectionHeader}><Text style={styles.sectionText}>Tài Khoản</Text></View>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>👤  Thông tin tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('RESET_PASSWORD')}>
        <Text style={styles.optionText}>🔒  Đổi mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>🚫  Xóa tài khoản</Text>
      </TouchableOpacity>

      {/* Support Section */}
      <View style={styles.sectionHeader}><Text style={styles.sectionText}>Hỗ Trợ</Text></View>
      <TouchableOpacity style={styles.optionButton} onPress={() => Linking.openURL('tel:02435141791')}>
        <Text style={styles.optionText}>📞 Hotline: 0987563385</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => Linking.openURL('https://zalo.me/ttcpqg')}>
        <Text style={styles.optionText}>💬  Zalo: https://zalo.me/fpt.cinema</Text>
      </TouchableOpacity>

      {/* Settings Section */}
      <View style={styles.sectionHeader}><Text style={styles.sectionText}>Cài Đặt</Text></View>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>🔨  Điều khoản sử dụng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>🔒  Chính sách bảo mật</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3251',
    padding: 20,
    paddingTop: 40,

  },
  sectionHeader: {
    marginTop: 20,
  },
  sectionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
});